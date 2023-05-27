package com.example.dashboardmodern.Fragment.Client;

import android.content.DialogInterface;
import android.os.Bundle;

import androidx.appcompat.app.AlertDialog;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewpager2.widget.ViewPager2;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.dashboardmodern.Activity.MainActivity;
import com.example.dashboardmodern.Apdapter.UserImgAdapter;
import com.example.dashboardmodern.Apdapter.photoAdapter;
import com.example.dashboardmodern.R;
import com.example.dashboardmodern.Utils.Photo;
import com.example.lib.Model.Request.updatePt;
import com.example.lib.Model.Response.PTInfoResponse;
import com.example.lib.Model.Response.ptImgResponse;
import com.example.lib.Repository.Admin;
import com.example.lib.Repository.Client;
import com.example.lib.Repository.Home;
import com.example.lib.RetrofitClient;
import com.squareup.picasso.Picasso;

import java.util.ArrayList;
import java.util.List;

import me.relex.circleindicator.CircleIndicator3;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link FragmentPtInfo#newInstance} factory method to
 * create an instance of this fragment.
 */
public class FragmentPtInfo extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;
    private PTInfoResponse ptInfoResponse;
    OnNoteListener onNoteListener ;

    public FragmentPtInfo() {
        // Required empty public constructor
    }

    public FragmentPtInfo(PTInfoResponse ptInfoResponse) {
        this.ptInfoResponse = ptInfoResponse;
    }

    public static FragmentPtInfo newInstance(String param1, String param2) {
        FragmentPtInfo fragment = new FragmentPtInfo();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view =  inflater.inflate(R.layout.fragment_pt_info, container, false);
        Home methods = RetrofitClient.getRetrofit().create(Home.class);
        MainActivity mainActivity = (MainActivity) getActivity();
        ImageView profile_image = view.findViewById(R.id.profile_image);
        if(ptInfoResponse != null)
        Picasso.get().load(ptInfoResponse.getAvatar()).into(profile_image);

        TextView txtName = view.findViewById(R.id.txtName);
        txtName.setText(ptInfoResponse.getName());

        TextView txtEmail = view.findViewById(R.id.txtEmail);
        txtEmail.setText(ptInfoResponse.getEmail());

        TextView txtAddress = view.findViewById(R.id.txtAddress);
        txtAddress.setText(ptInfoResponse.getAddress());

        TextView txtPhone = view.findViewById(R.id.txtPhone);
        txtPhone.setText(ptInfoResponse.getPhone());

        TextView txtCost = view.findViewById(R.id.txtCost);
        txtCost.setText(String.valueOf(ptInfoResponse.getFee()));

        Button btn_addIMG = view.findViewById(R.id.btn_addIMG);
        btn_addIMG.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                FragmentTransaction fragmentTransaction = getActivity().getSupportFragmentManager().beginTransaction();
                fragmentTransaction.replace(R.id.fragmentContainerView, new FragmentPtNewImg(ptInfoResponse));
                fragmentTransaction.addToBackStack("Fragment home");
                fragmentTransaction.commit();
            }
        });

        Client client = RetrofitClient.getRetrofit().create(Client.class);

        Button btn_update = view.findViewById(R.id.btn_update);
        btn_update.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int cost= 0;
                try {
                    cost = Integer.parseInt(txtCost.getText().toString());
                    updatePt updatePt = new updatePt(ptInfoResponse.getId(),
                            txtName.getText().toString(),
                            txtPhone.getText().toString(),
                            txtEmail.getText().toString(),
                            txtAddress.getText().toString(),
                            cost);
                    System.out.println(updatePt.toString());
                    Call<PTInfoResponse> updatePT = client.updatePT(
                            "Bearer "+mainActivity.jwt,
                            updatePt
                    );
                    updatePT.enqueue(new Callback<PTInfoResponse>() {
                        @Override
                        public void onResponse(Call<PTInfoResponse> call, Response<PTInfoResponse> response) {
                            ShowMessage("Cập nhật thành công", new OnNoteListener() {
                                @Override
                                public void onNoteClick() {
                                    FragmentTransaction fragmentTransaction = getActivity().getSupportFragmentManager().beginTransaction();
                                    fragmentTransaction.replace(R.id.fragmentContainerView, new FragmentPtInfo(response.body()));
                                    fragmentTransaction.addToBackStack("Fragment home");
                                    fragmentTransaction.commit();
                                }
                            });

                        }

                        @Override
                        public void onFailure(Call<PTInfoResponse> call, Throwable t) {

                        }
                    });
                } catch (NumberFormatException e) {
                    ShowMessage("Giá tiền không phải là số", new OnNoteListener() {
                        @Override
                        public void onNoteClick() {
                            FragmentTransaction fragmentTransaction = getActivity().getSupportFragmentManager().beginTransaction();
                            fragmentTransaction.replace(R.id.fragmentContainerView, new FragmentPtInfo(ptInfoResponse));
                            fragmentTransaction.addToBackStack("Fragment home");
                            fragmentTransaction.commit();
                        }
                    });
                }
            }
        });

        ViewPager2 imgList = view.findViewById(R.id.imgList);
        CircleIndicator3 mCircleIndicator = view.findViewById(R.id.indicator);
        Home home = RetrofitClient.getRetrofit().create(Home.class);
        Call<List<ptImgResponse>> getImg = home.getPicByPt(ptInfoResponse.getId());
        getImg.enqueue(new Callback<List<ptImgResponse>>() {
            @Override
            public void onResponse(Call<List<ptImgResponse>> call, Response<List<ptImgResponse>> response) {
                List<Photo> photos = new ArrayList<>();
                for (ptImgResponse img : response.body()) {
                    photos.add(new Photo(img.getImg()));
                }
                photoAdapter photoAdapter = new photoAdapter(photos);
                imgList.setAdapter(photoAdapter);
                mCircleIndicator.setViewPager(imgList);
            }

            @Override
            public void onFailure(Call<List<ptImgResponse>> call, Throwable t) {

            }
        });
        return view ;
    }


    public void ShowMessage(String text , OnNoteListener mListener){
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        builder.setMessage("Cám ơn bạn");
        builder.setTitle(text);
        builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                mListener.onNoteClick();
            }
        });
        builder.setCancelable(true);
        builder.create().show();
    }

    public interface OnNoteListener{
        void onNoteClick();
    }
}
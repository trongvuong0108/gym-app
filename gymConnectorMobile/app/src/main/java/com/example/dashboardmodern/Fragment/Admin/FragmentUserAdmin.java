package com.example.dashboardmodern.Fragment.Admin;

import android.os.Bundle;

import androidx.appcompat.app.AlertDialog;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.dashboardmodern.Activity.MainActivity;
import com.example.dashboardmodern.Apdapter.AdminUserApdapter;
import com.example.dashboardmodern.R;
import com.example.lib.Model.Response.userInfoResponse;
import com.example.lib.Repository.Admin;
import com.example.lib.RetrofitClient;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link FragmentUserAdmin#newInstance} factory method to
 * create an instance of this fragment.
 */
public class FragmentUserAdmin extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public FragmentUserAdmin() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment FragmentUserAdmin.
     */
    // TODO: Rename and change types and number of parameters
    public static FragmentUserAdmin newInstance(String param1, String param2) {
        FragmentUserAdmin fragment = new FragmentUserAdmin();
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
        View view =  inflater.inflate(R.layout.fragment_user_admin, container, false);
        RecyclerView listUser = view.findViewById(R.id.listUser);
        Admin methods = RetrofitClient.getRetrofit().create(Admin.class);
        MainActivity mainActivity = (MainActivity) getActivity();
        Call<List<userInfoResponse>> getUserAdmin = methods.getUserAdmin("Bearer "+mainActivity.jwt);
        getUserAdmin.enqueue(new Callback<List<userInfoResponse>>() {
            @Override
            public void onResponse(Call<List<userInfoResponse>> call, Response<List<userInfoResponse>> response) {
                AdminUserApdapter adminUserApdapter = new AdminUserApdapter(response.body(), new AdminUserApdapter.OnNoteListener() {
                    @Override
                    public void onNoteClick(userInfoResponse position,Boolean enable) {
                        if(!enable){
                            Call<String> disableUser = methods.disableUser("Bearer "+mainActivity.jwt,position.getId());
                            disableUser.enqueue(new Callback<String>() {
                                @Override
                                public void onResponse(Call<String> call, Response<String> response) {
                                    ShowMessage("Khóa tài khoản user thành công");
                                }

                                @Override
                                public void onFailure(Call<String> call, Throwable t) {

                                }
                            });
                        }
                        else {
                            Call<String> disableUser = methods.enableUser("Bearer "+mainActivity.jwt,position.getId());
                            disableUser.enqueue(new Callback<String>() {
                                @Override
                                public void onResponse(Call<String> call, Response<String> response) {
                                    ShowMessage("Mở khóa tài khoản user thành công");
                                }

                                @Override
                                public void onFailure(Call<String> call, Throwable t) {

                                }
                            });
                        }

                    }
                });
                LinearLayoutManager linearLayoutManager = new LinearLayoutManager(requireContext(),LinearLayoutManager.VERTICAL,false);
                listUser.setLayoutManager(linearLayoutManager);
                listUser.setAdapter(adminUserApdapter);
            }

            @Override
            public void onFailure(Call<List<userInfoResponse>> call, Throwable t) {

            }
        });

        return view;
    }
    public void ShowMessage(String text){
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        builder.setMessage("Cám ơn bạn");
        builder.setTitle(text);
        builder.setPositiveButton("OK", null);
        builder.setCancelable(true);
        builder.create().show();
    }
}
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { memberPost } from './Register/api';
import { Member } from './Register/Member';

/*interface Member {
    id: string;
	  email: string;
    password: string;
}
*/
const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } , reset} = useForm<Member>();
  const mutation = useMutation(memberPost, {
    onSuccess: (data) => {
      console.log('Response:', data);
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  });

  const onSubmit = (data: Member) => {
    mutation.mutate(data);
    console.log('Member:', data);
    reset();
  };


  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" className="flex items-center no-underline mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Under-The-C   
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  회원가입
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                      <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">아이디</label>
                      <input 
                      type="id"
                      {...register('id',{required: '아이디을 입력하세요'})}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
                      <input 
                      type="email"
                      {...register('email',{required: '이메일을 입력하세요'})}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">비밀번호</label>
                      <input  type="password"
                      {...register('password', { 
                          required: '비밀번호를 입력', 
                              minLength:{
                                  value: 6,
                                  message: '비밀번호는 최소 6자리입니다.',
                              },
                          })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                  </div>
                  <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">비밀번호 확인</label>
                      <input  type="password"
                      {...register('password', { 
                          required: '비밀번호를 입력', 
                              minLength:{
                                  value: 6,
                                  message: '비밀번호는 최소 6자리입니다.',
                              },
                          })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                  </div>
                  <button type="submit" className="w-full text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">회원가입</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      계정이 있으신가요? 
                      <a href="/LoginPage" className="font-medium no-underline text-dark hover:underline dark:text-white">
                        Login
                      </a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  );
};

export default RegisterPage;
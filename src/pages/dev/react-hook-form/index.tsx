import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, dirtyFields, isValid, isSubmitting },
  } = useForm<FormValues>({
    criteriaMode: 'all',
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // console.log(data);
    // reset();
    try {
      throw new Error('エラーが発生しています。');
      console.log(data);
    } catch (error: any) {
      setError('root.server', {
        type: 'server',
        message: error.message,
      });
      console.log(error.message);
    }
  };

  return (
    <DefaultLayout>
      <SeoMeta pageTitle="React Hook Form" pagePath={'dev/react-hook-form'} />
      <section className="pt-[100px]">
        <div>
          <h2 className="text-40">React hook form</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 items-start"
          >
            <div className="grid grid-cols-[80px_1fr_1fr]">
              <label htmlFor="email">Email</label>
              <input
                className="w-220"
                type="email"
                id="email"
                {...register('email', {
                  required: 'メールアドレスを入力してください！',
                  pattern: {
                    value:
                      /** javascriptのmailアドレスの正規表現をそのまま使う */ /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'メールアドレスの形式が正しくありません。',
                  },
                })}
              />
              {errors.email?.message && <span>{errors.email.message}</span>}
            </div>
            <div className="grid grid-cols-[80px_1fr_1fr_1fr]">
              <label htmlFor="password">Password</label>
              <input
                className="w-220"
                id="password"
                {...register('password', {
                  required: {
                    value: true,
                    message: 'パスワードを入力してください！',
                  },
                  minLength: {
                    value: 8,
                    message: 'パスワードは8文字以上で入力してください!',
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: 'アルファベットのみ入力してください。',
                  },
                })}
                type="password"
              />
              {/* {errors.password?.message && (
                <span>{errors.password.message}</span>
              )} */}
              {errors.password?.type === 'required' && (
                <div>{errors.password.types?.required}</div>
              )}
              {errors.password?.types?.pattern && (
                <div>{errors.password.types.pattern}</div>
              )}
              {errors.password?.type === 'minLength' && (
                <div>8文字以上入力してください。</div>
              )}
            </div>
            <div className="font-blog text-12">
              dirtyFields: {JSON.stringify(dirtyFields, null, 2)}
            </div>
            <button
              type="submit"
              data-is-valid={isValid}
              className="border border-primary data-[is-valid=false]:border-gray-400 px-2 rounded-md data-[is-valid=false]:cursor-not-allowed data-[is-valid=false]:text-gray-400"
              disabled={!isValid || isSubmitting}
            >
              ログイン
            </button>
            {errors.root?.server && <span>{errors.root.server.message}</span>}
          </form>
        </div>
      </section>
    </DefaultLayout>
  );
}

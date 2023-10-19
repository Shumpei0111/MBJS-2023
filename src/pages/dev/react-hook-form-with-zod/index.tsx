import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const loginSchema = z
  .object({
    email: z
      .string()
      .email({ message: '形式ちがうよ' })
      .min(8, { message: '8文字いれてね' }),
    password: z.string().min(8, { message: '8文字いれてね' }),
    confirmPassword: z.string().min(8, { message: '8文字いれてね' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password do not match',
    path: ['confirmPassword'],
  });

type Login = z.infer<typeof loginSchema>;

export default function ReactHookFormWithZod() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    criteriaMode: 'all',
    mode: 'onBlur',
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit((d) => console.log(d));

  return (
    <DefaultLayout>
      <SeoMeta
        pageTitle="React Hook Form with Zod"
        pagePath={'dev/react-hook-form-with-zod'}
      />
      <section className="pt-[100px]">
        <h2 className="text-40">React Hook Form with Zod</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-2 items-start">
          <div className="grid grid-cols-[80px_1fr_1fr] gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              {...register('email', { required: true })}
              className="w-220"
            />
            <p className="font-blog text-12">{errors.email?.message}</p>
          </div>
          <div className="grid grid-cols-[80px_1fr_1fr] gap-2">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              {...register('password')}
              type="password"
              className="w-220"
            />
            <p className="font-blog text-12">{errors.password?.message}</p>
          </div>
          <div className="grid grid-cols-[80px_1fr_1fr] gap-2">
            <label htmlFor="confirmPassword">confirmPassword</label>
            <input
              id="confirmPassword"
              {...register('confirmPassword')}
              type="password"
              className="w-220"
            />
            <p>{errors.confirmPassword?.message}</p>
          </div>
          <button type="submit">ログイン</button>
        </form>
      </section>
    </DefaultLayout>
  );
}

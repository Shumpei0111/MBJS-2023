import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import { useForm } from 'react-hook-form';

type FormData = {
  showAge: boolean;
  age: string;
};

export default function ReactHookForm2() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const watchShowAge = watch('showAge', false);

  const onSubmit = handleSubmit((d) => console.log(d));

  return (
    <DefaultLayout>
      <SeoMeta pageTitle="React Hook Form2" pagePath={'dev/react-hook-form2'} />
      <section className="pt-[100px]">
        <form onSubmit={onSubmit}>
          <div>
            <h2 className="text-40">React hook form</h2>
            <input type="checkbox" {...register('showAge')} />
          </div>
          {watchShowAge && (
            <div>
              <input type="number" {...register('age', { min: 50 })} />
              {errors.age && <span>50以上を選択して</span>}
            </div>
          )}
          <div>
            <button type="submit">そうしん</button>
          </div>
        </form>
      </section>
    </DefaultLayout>
  );
}

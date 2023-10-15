import { SeoMeta } from '@/components/Seo';
import { DefaultLayout } from '@/layout/default';
import Image from 'next/image';
import DollImage from '/public/images/dev/dark/doll.jpeg';

export default function NextImagePractice() {
  const FigCaption: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    return (
      <figcaption className="font-blog text-14 max-w-md pt-2">
        {children}
      </figcaption>
    );
  };

  const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  return (
    <DefaultLayout>
      <SeoMeta
        pageTitle="Next Image Practice"
        pagePath="dev/next-image-practice"
      />
      <div className="py-20">
        <h2 className="text-40">Next Imageについて確認する</h2>
        <div className="grid pt-10">
          <figure className="pt-10">
            <Image
              src={'/images/dev/dark/doll-3.jpg'}
              alt="fill属性をつける"
              style={{ objectFit: 'contain' }}
              placeholder="blur"
              width={600}
              height={600}
              blurDataURL={rgbDataURL(237, 181, 6)}
              priority
            />
            <FigCaption>Blur効果付与</FigCaption>
          </figure>
          <div className="grid md:grid-cols-2 gap-4 pt-10">
            <figure>
              <Image
                src={'/images/dev/dark/doll-3.jpg'}
                width={500}
                height={500}
                alt="src属性に直接URLを記述"
                priority
              />
              <FigCaption>
                <span>
                  src属性に直接URLを記述した場合はwidth / height / alt /
                  priorityがないとエラー / wraningが出る
                </span>
                <p className="border-1 border-primary rounded-md px-2 bg-white text-black">{`${decodeURIComponent(
                  '/_next/image?url=%2Fimages%2Fdev%2Fdark%2Fdoll-3.jpg&w=1080&q=75',
                )}`}</p>
              </FigCaption>
            </figure>
            <figure>
              <Image src={DollImage} alt="importした画像" />
              <FigCaption>
                <span>
                  src属性にimportした画像パスを記述すると、width /
                  heightを記述しなくてもエラーにならない
                </span>
                <p className="border-1 border-primary rounded-md px-2 bg-white text-black">{`${decodeURIComponent(
                  '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdoll.063febda.jpeg&w=1920&q=75',
                )}`}</p>
              </FigCaption>
            </figure>
            <figure>
              <Image
                src={'/images/dev/dark/doll-3.jpg'}
                width={500}
                height={500}
                alt="src属性に直接URLを記述"
                style={{ width: '100%', height: 'auto' }}
              />
              <FigCaption>
                <span>style属性に width: 100%, height: auto を付与</span>
                <p className="border-1 border-primary rounded-md px-2 bg-white text-black">{`${decodeURIComponent(
                  '/_next/image?url=%2Fimages%2Fdev%2Fdark%2Fdoll-3.jpg&w=1080&q=75',
                )}`}</p>
              </FigCaption>
            </figure>
            <figure>
              <Image
                src={DollImage}
                alt="importした画像"
                style={{ width: '100%', height: 'auto' }}
              />
              <FigCaption>
                <span>style属性に width: 100%, height: auto を付与</span>
                <p className="border-1 border-primary rounded-md px-2 bg-white text-black">{`${decodeURIComponent(
                  '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdoll.063febda.jpeg&w=1920&q=75',
                )}`}</p>
              </FigCaption>
            </figure>
          </div>
          <figure className="pt-10">
            <div className="relative h-300 bg-blue-300">
              <Image
                src={'/images/dev/dark/doll-3.jpg'}
                alt="fill属性をつける"
                style={{ objectFit: 'contain' }}
                fill
              />
            </div>
            <FigCaption>
              <span>
                fill属性をつけると width height
                は記述しなくてもエラーにならない。
              </span>
              <span>imgタグに付与されるCSS⏬</span>
              <pre className="pt-2">
                <code>
                  position: absolute; height: 100%; width: 100%; inset: 0px;
                  color: transparent;
                </code>
              </pre>
              <span>
                ただし、親DOMでラップして高さを確保しないとheightが保てず0になり表示されないように見える。また
                h-300
                などとすると縦横比が崩れる。そのため、Imageコンポーネントに
                objectFit: contain をつける。
              </span>
            </FigCaption>
          </figure>
          <figure className="pt-10">
            <div className="relative h-300 bg-blue-300">
              <Image
                src={'/images/dev/dark/doll-3.jpg'}
                alt="fill属性をつける"
                style={{ objectFit: 'cover' }}
                fill
              />
            </div>
            <FigCaption>
              <span>同じ指定で objectFit: cover にした。</span>
            </FigCaption>
          </figure>
          <figure className="pt-10">
            <div className="relative h-300 bg-blue-300">
              <Image
                src={'/images/dev/dark/doll-3.jpg'}
                alt="fill属性をつける"
                style={{ objectFit: 'contain' }}
                fill
                sizes="50vw"
              />
            </div>
            <FigCaption>
              <span>objectFit: contain の fill属性に、sizes=50vwをつける</span>
              <p>
                たとえば grid を利用して画像を 2
                列に表示している場合などに利用できます。この場合は画像の幅はブラウザ幅いっぱいに表示させる必要がないため大きな画像が必要ありません。2
                列に設定を行っているため画像のサイズもブラウザ幅の半分である方が最適な画像になります。そのため
                sizes で 50vw
                を設定してブラウザ幅の半分の画像がダウンロードできるように設定しています。
                <br />
                引用：https://reffect.co.jp/nextjs/nextjs-image/#sizes-%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6
              </p>
            </FigCaption>
          </figure>
        </div>
      </div>
    </DefaultLayout>
  );
}

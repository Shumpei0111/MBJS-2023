import Image from 'next/image';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export const RightSection: React.FC = () => {
  const router = useRouter();
  const [isNameShow, setIsNameShow] = useState(false);
  const [isJobShow, setIsJobShow] = useState(false);
  const [isSnsShow, setIsSnsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsNameShow(true);
    }, 300);
    setTimeout(() => {
      setIsJobShow(true);
    }, 400);
    setTimeout(() => {
      setIsSnsShow(true);
    }, 600);
  }, []);

  return (
    <div
      role="main"
      className="absolute right-0 top-0 bg-black h-screen z-[100] w-[calc(100vw_/_2)] mr-[calc(50%_-_50vw)] p-20 pt-10"
    >
      <div className="flex justify-end">
        <button
          className="uppercase relative text-20"
          onClick={() => router.push('/')}
        >
          Close
          <span className="h-1 bg-primary block w-full absolute bottom-1" />
        </button>
      </div>
      <div data-profile="info" className="pt-20">
        <div className="max-w-full h-328 relative fade-in">
          <Image
            src={'/images/me.png'}
            alt="Shumpeiの写真"
            priority
            fill
            objectFit="contain"
          />
        </div>
        <div
          className={classNames([`pt-10 opacity-0`, isNameShow && 'fade-in'])}
        >
          <h3 className="text-60">Shumpei</h3>
          <p className="text-20 pt-1">Base in Tokyo, Japan</p>
        </div>
        <ul className={classNames([`pt-10 opacity-0`, isJobShow && 'fade-in'])}>
          <li>フロントエンド・デベロッパー</li>
          <li>同人作家</li>
        </ul>
        <ul
          className={classNames([
            `flex gap-10 items-center pt-10 opacity-0`,
            isSnsShow && 'fade-in',
          ])}
        >
          <li>
            <a
              href="https://twitter.com/seventhseven"
              target="_blank"
              rel="noopener noreferrer"
              className="text-20 flex items-center gap-x-2"
            >
              <FontAwesomeIcon icon={faTwitter} className="w-24" />
              @seventhseven
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Shumpei0111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-20 flex items-center gap-x-2"
            >
              <FontAwesomeIcon icon={faGithub} className="w-24" />
              Shumpei0111
            </a>
          </li>
          <li>
            <a
              href="https://www.pixiv.net/users/91629"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2"
            >
              <span className="text-20">Pixiv</span>
              なな爺
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

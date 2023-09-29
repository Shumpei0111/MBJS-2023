import Image from 'next/image';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import hoverEffect from 'hover-effect';
import { TransitionItem } from '@/features/animation/transitionItem';

export const RightSection: React.FC = () => {
  const router = useRouter();
  const [isNameShow, setIsNameShow] = useState(false);
  const [isJobShow, setIsJobShow] = useState(false);
  const [isSnsShow, setIsSnsShow] = useState(false);
  const [isHoverEffectInit, setIsHoverEffectInit] = useState(false);

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

    if (!isHoverEffectInit) {
      setIsHoverEffectInit(true);
      new hoverEffect({
        parent: document.querySelector('#prof'),
        intensity: 0.2,
        image1: '/images/me.webp',
        image2: '/images/me-color.webp',
        displacementImage: '/images/nosie_cover.png',
        imagesRatio: 505 / 929,
      });
    }
  }, []);

  return (
    <TransitionItem transitionIndex={0}>
      <div
        role="main"
        className="absolute right-0 top-0 z-[100] w-screen md:w-[calc(100vw_/_2)] mr-[calc(50%_-_50vw)] md:p-20 p-10 pt-10"
        style={{ backgroundColor: 'black' }}
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
          <div
            id="prof"
            className="fade-in h-384 relative [&_canvas:nth-child(2)]:absolute [&_canvas:nth-child(2)]:top-0"
          ></div>
          <div
            className={classNames([`pt-10 opacity-0`, isNameShow && 'fade-in'])}
          >
            <h3 className="text-60">Shumpei</h3>
            <p className="text-20 pt-1">Base in Tokyo, Japan</p>
          </div>
          <ul
            className={classNames([`pt-10 opacity-0`, isJobShow && 'fade-in'])}
          >
            <li>フロントエンド・デベロッパー</li>
            <li>同人作家</li>
          </ul>
          <ul
            className={classNames([
              `flex md:flex-row flex-col gap-10 md:items-center pt-10 opacity-0 flex-wrap`,
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
    </TransitionItem>
  );
};

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <Image
        src="/images/profile.jpg"
        alt="프로필 이미지"
        width={150}
        height={150}
        className="rounded-full"
        priority
      />

      <h1 className="text-4xl font-bold mt-6">안녕하세요, 박성현입니다.</h1>
      <p className="mt-3 text-lg text-grey-700">
        세상을 즐겁게 만드는 게임 개발자 지망생입니다.
      </p>
      <p className="text-lg text-grey-700">
        새로운 기술을 배우고 적용하는 것을 즐깁니다.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/projects"
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          포트폴리오 보러가기
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors"
        >
          이력서 보기
        </a>
      </div>
    </section>
  );
}

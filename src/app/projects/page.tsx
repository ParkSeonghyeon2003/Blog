import Link from "next/link";
import Image from "next/image";

const mockProjects = [
  {
    id: "project-alpha",
    title: "2D 플랫포머 게임",
    description: "Unity 엔진으로 개발한 2D 플랫포머 게임입니다.",
    imageUrl: "/images/project-alpha.png",
  },
  {
    id: "project-beta",
    title: "멀티플레이어 퍼즐 게임",
    description:
      "포톤(Photon) 엔진을 활용한 실시간 멀티플레이어 퍼즐 게임입니다.",
    imageUrl: "/images/project-beta.png",
  },
  {
    id: "project-gamma",
    title: "절차적 생성 기술 데모",
    description: "절차적 행성 생성을 구현한 기술 데모입니다.",
    imageUrl: "/images/project-gamma.png",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-extrabold text-center mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="block border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <div className="relative w-full h-56">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill // 부모 요소(div)를 꽉 채우도록 설정
                style={{ objectFit: "cover" }} // 이미지가 비율을 유지하며 꽉 차도록 설정
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

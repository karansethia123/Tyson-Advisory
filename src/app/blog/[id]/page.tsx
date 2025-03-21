import { Card } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>
}

const BlogPage = async ({ params }: Props) => {

  const { id } = await params;

  console.log(id)

  return <div className="p-0">
    <div className="w-full relative -mt-[8vh] pt-24 pb-4 flex flex-col gap-5 items-center justify-center bg-white min-h-[55vh] bg-[url('https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9xqyoMxALTuWjGx1pbi625nRrAha3EzMPZKDs')] bg-fixed bg-cover">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/10 to-black/50"></div>
      <h1 className="z-20 w-full text-center text-3xl md:text-5xl font-header font-stretch-200% font-bold uppercase">To take a trivial example, which of us ever undertakes laborious physical exercise</h1>
      <span className="z-20 flex items-center gap-5 w-full justify-center font-semibold">
        <p className="font-content text-sm text-gray-300 tracking-wider">Author Name</p>
        <p className="font-content text-sm text-gray-300">|</p>
        <p className="font-content text-sm text-gray-300 tracking-wider">March 21, 2025</p>
        <p className="font-content text-sm text-gray-300">|</p>
        <p className="font-content text-sm text-gray-300 tracking-wider">Category</p>
      </span>
    </div>
    <div className="flex px-5 py-10 items-center justify-center">
      <Image
        src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h98hQzSCwC1G5bX4luoBVdDxyz2pqhSve6WNIs"
        alt="blog-image" width="800" height="900"
        className="aspect-video rounded-md shadow-xl shadow-black" />
    </div>
    <div className="w-full flex px-5 items-center justify-center">
      <section className="flex flex-col md:flex-row items-start justify-between gap-4 max-w-6xl">
        <div className="flex flex-col gap-2 w-full md:w-3/5 py-10">
          <p className="font-content tracking-wider text-sm md:text-base leading-8">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
          <h2 className="text-4xl font-header font-stretch-200% font-semibold pt-5 pb-3">Sub Header for the blog</h2>
          <p className="font-content tracking-wider leading-8">To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
          <p className="font-content tracking-wider leading-8">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because</p>
        </div>
        <div className="w-full md:w-2/5 py-10 space-y-3">
          <p className="text-xl font-semibold font-header uppercase">More Case studies</p>
          <Card className="flex flex-col gap-1 p-4">
            <h3 className="text-xl font-semibold font-header font-stretch-200%">Title for the blog related to category</h3>
            <span className="z-20 flex items-center gap-2 w-full font-semibold">
              <p className="font-content text-xs text-gray-300 tracking-wider">March 22, 2025</p>
              <p className="font-content text-sm text-gray-300">|</p>
              <p className="font-content text-xs text-gray-300 tracking-wider">Category</p>
            </span>
          </Card>
          <Card className="flex flex-col gap-1 p-4">
            <h3 className="text-xl font-semibold font-header font-stretch-200%">Title for the blog related to category</h3>
            <span className="z-20 flex items-center gap-2 w-full font-semibold">
              <p className="font-content text-xs text-gray-300 tracking-wider">March 22, 2025</p>
              <p className="font-content text-sm text-gray-300">|</p>
              <p className="font-content text-xs text-gray-300 tracking-wider">Category</p>
            </span>
          </Card>
        </div>
      </section>
    </div>
  </div>;
};

export default BlogPage;


import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import BlogGrid from "./BlogGrid";

const BlogsList = () => {
  return <div className="w-full">
    <div className="flex flex-col items-center justify-center w-full h-[25vh]">
      <h1 className="w-full text-center text-2xl md:text-6xl font-header font-stretch-200% font-semibold pt-4 pb-10">News and Insights</h1>
      <Separator className="bg-white max-w-2/3" />
    </div>

    <section className="w-full flex items-center">
      <div className="max-w-3xl flex flex-wrap mx-auto items-center justify-center gap-7">
        <Button variant="link" className="font-content">Category 1</Button>
        <Button variant="link" className="font-content">Category 1</Button>
        <Button variant="link" className="font-content">Category 1</Button>
        <Button variant="link" className="font-content">Category 1</Button>
        <Button variant="link" className="font-content">Category 1</Button>
        <Button variant="link" className="font-content">Category 1</Button>
        <Button variant="link" className="font-content">Category 1</Button>
      </div>
    </section>
    <BlogGrid />
  </div>;
};

export default BlogsList;


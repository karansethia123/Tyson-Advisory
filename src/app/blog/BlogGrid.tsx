import { Card } from "@/components/ui/card"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Private Cloud Automation Requirements & Design",
    category: "Case Study Cloud Enablement",
    date: "March 22, 2025",
    imageUrl: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h98hQzSCwC1G5bX4luoBVdDxyz2pqhSve6WNIs",
  },
  {
    id: 2,
    title: "Serverless Architecture: The Future of Deployment",
    category: "Technology Trends",
    date: "March 18, 2025",
    imageUrl: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h95MEFYflFDOufSos95J3jPxl0RznXcgQIEt2v",
  },
  {
    id: 3,
    title: "Machine Learning Implementation for Business Growth",
    category: "AI & Data Science",
    date: "March 15, 2025",
    imageUrl: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9Y4EO6z1NMFK6AZWV9Qv1IGE4zy5CdbBeqfDP",
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices for Remote Teams",
    category: "Security",
    date: "March 10, 2025",
    imageUrl: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h98hQzSCwC1G5bX4luoBVdDxyz2pqhSve6WNIs",
  },
  {
    id: 5,
    title: "DevOps Culture: Breaking Down Silos",
    category: "Development",
    date: "March 5, 2025",
    imageUrl: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9Y4EO6z1NMFK6AZWV9Qv1IGE4zy5CdbBeqfDP",
  },
  {
    id: 6,
    title: "Blockchain Applications in Supply Chain Management",
    category: "Blockchain",
    date: "March 1, 2025",
    imageUrl: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h95MEFYflFDOufSos95J3jPxl0RznXcgQIEt2v",
  },
]

export default function BlogGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

type BlogPost = {
  id: number
  title: string
  category: string
  date: string
  imageUrl: string
}

function BlogCard({ post }: { post: BlogPost }) {

  return (
    <Link href={`/blog/${post.id}`}>
      <Card
        className="relative h-[400px] overflow-hidden group cursor-pointer"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-linear transform scale-100 group-hover:scale-110"
          style={{
            backgroundImage: `url(${post.imageUrl})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute bottom-0 left-0 p-6 z-10 w-full font-content text-white">
          <div className="text-sm font-medium mb-2">{post.category}</div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-header">{post.title}</h2>
          <div className="text-sm text-white">{post.date}</div>
        </div>
      </Card>
    </Link>
  )
}


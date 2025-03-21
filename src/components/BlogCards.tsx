import Image from "next/image"

const blogs = [
  {
    id: 1,
    category: "Case Study Cyber Security",
    title: "Rapid Regulatory Assessment",
    image: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h98hQzSCwC1G5bX4luoBVdDxyz2pqhSve6WNIs",
    slug: "/blog/rapid-regulatory-assessment",
  },
  {
    id: 2,
    category: "Case Study Cyber Security",
    title: "Vulnerability Lifecycle Management",
    image: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h95MEFYflFDOufSos95J3jPxl0RznXcgQIEt2v",
    slug: "/blog/vulnerability-lifecycle-management",
  },
  {
    id: 3,
    category: "Case Study Cyber Security",
    title: "Analytics to Empower Security Leadership",
    image: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9Y4EO6z1NMFK6AZWV9Qv1IGE4zy5CdbBeqfDP",
    slug: "/blog/analytics-security-leadership",
  },
]

const BlogCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {blogs.map((blog) => (
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg group" key={blog.id}>
          <div className="w-full h-full overflow-hidden">
            <Image
              src={blog.image || "/placeholder.svg"}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <span className="font-content text-sm font-medium text-gray-300 mb-2">{blog.category}</span>
            <h3 className="text-2xl font-medium font-header text-white leading-tight group-hover:text-blue-400 transition-colors">
              {blog.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogCards;

export default function Blog({blog}) {
    const {cover_img,author} = blog
  return (
    <div className="w-2/3">
        <div className="w-[300px]"><img src={cover_img} alt=""/></div>
        <h1 className="text-xl">{author}</h1>
    </div>
  )
}

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1> Welcom to Nextjs</h1>     
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
    </main>
  );
}


// export default async function Home() {
//   const data= await await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   const todo=await data.json()
//   console.log(todo)
//   console.log(2222222)
//   return (
//     <main>
//       <h1>{todo.title}</h1>
//       <h1> Welcom to Nextj2222222222222s</h1>     
//       <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//     </main>
//   );
// }



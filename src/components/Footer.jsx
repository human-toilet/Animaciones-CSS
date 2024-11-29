//componente para manejar el footer
export function Footer({ author, email }){
  return (
    <footer className="flex justify-center align-center mb-[20px]">
      <div className="text-white w-[50%] rounded-[15px]">
        <span className="block text-center font-bold">Author: {author}</span>
        <a 
          className="text-blue-800 text-center block font-bold"
          href={`<footer>mailto:${email}`}
        >
          <span>contact</span>
        </a>
      </div>
    </footer>
  )
}
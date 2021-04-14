import Author from '../types/author';
import Avatar from './avatar';

type Props = {
  author:Author
};

const Intro = ({author}:Props) => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        
        <img src={author.picture} className="w-15 h-15 rounded-full mr-4" alt="author draw" />
      
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        The Dheph Blog
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        let's learn 📖 
      </h4>
    </section>
  )
}

export default Intro

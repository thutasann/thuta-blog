import Image from 'next/image';
import Link from 'next/link';
import urlFor  from '../../utils/urlFor';

export const RichTextComponents = {
    types:{
        image: ({ value }: any) => {
            return (
                <div className='relative w-full m-10 mx-auto h-96'>
                    <Image
                        className='object-contain'
                        src={urlFor(value).url()}
                        fill
                        alt="Blog Content Image"
                        priority
                        quality={100}
                    />
                </div>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className='py-5 ml-10 list-disc'>
                {children}
            </ul>
        ),
        number: ({ children }: any) => (
            <ol className='list-decimal mt-lg'>{children}</ol>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className='py-10 text-5xl font-bold'>{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className='py-10 text-4xl font-bold'>{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className='py-10 text-3xl font-bold'>{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className='py-10 text-2xl font-bold'>
                {children}
            </h4>
        ),
        p: ({ children }: any) => (
            <p className='py-10 text-2xl font-bold bg-red-500'>
                {children}
            </p>
        ),
        blockquote: ({ children }: any) => (
            <blockquote
                className='py-5 pl-5 my-5 border-l-4 border-l-primary-teal'
            >
                {children}
            </blockquote>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/")
                    ? "noreferrer noopener"
                    : undefined;

            return (
                <Link
                    href={value.href}
                    target="_blank"
                    rel={rel}
                    className="underline decoration-primary-teal hover:decoration-primary-black"
                >
                    {children}
                </Link>
            );
        },
    },
}
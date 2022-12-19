import Image from 'next/image';
import Link from 'next/link';
import urlFor  from '../../utils/urlFor';

export const RichTextComponents = {
    types:{
        image: ({ value }: any) => {
            return (
                <div className='relative w-full py-4 m-10 mx-auto rounded-md h-72 lg:h-96'>
                    <Image
                        className='object-contain rounded-lg'
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
            <h1 className='text-5xl font-bold py-7'>{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className='text-4xl font-bold py-7'>{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className='text-3xl font-bold py-7'>{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className='text-2xl font-bold py-7'>
                {children}
            </h4>
        ),
        p: ({ children }: any) => (
            <p className='text-2xl font-bold text-justify bg-red-500 py-7'>
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
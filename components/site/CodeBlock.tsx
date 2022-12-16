"use client";

import { CopyBlock, dracula } from 'react-code-blocks';

type Props = {
    post: any
}

function CodeBlock ({post} : Props){
    return (
        <div className='p-4 bg-[#282A36] mt-7 border border-gray-100 border-opacity-50 hover:border-opacity-75 rounded-[30px] hover:rounded-[20px] transition-all delay-400 ease-in-out'>
            <CopyBlock
                text={post.code.code}
                language={post.code.language}
                wrapLines
                showLineNumbers={false}
                theme={dracula}
                codeBlock={true}
            />

        </div>
    )
}

export default CodeBlock
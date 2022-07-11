import React from 'react'

import { useRouter } from "next/router";
import Link from "next/link";
function BlogPostsPageSlug() {

    const router = useRouter();
    const about = "about";

    function handleClient() {
        router.replace("/about");
    }

    return (
        <div>BlogPostsPageSlug

            <Link replace href={`/${about}`}>About</Link>

            <button onClick={handleClient}>Load About Programatically</button>
        </div>
    )
}

export default BlogPostsPageSlug
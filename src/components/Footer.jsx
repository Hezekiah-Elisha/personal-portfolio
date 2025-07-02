import React from 'react'

export default function Footer() {
  return (
    <div className='bg-accent text-accent-foreground'>
        <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-space-mono">
            <div className="text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Hezekiah Elisha. All rights reserved.
            </p>
            <p className="text-sm mt-2">
                Made with ❤️ using React and Next.js
            </p>
            </div>
        </footer>
    </div>
  )
}

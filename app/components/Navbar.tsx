import React from 'react'

export default function Navbar() {
  return (
    <nav className='fixed py-3 px-12 flex items-center w-full justify-between z-40'>
        <div>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6055 3C4.2895 3 0.5 8.0665 0.5 10.6C0.5 13.1335 1.763 15.0335 4.2895 15.0335C6.816 15.0335 8.0795 15.6665 8.0795 17.5665C8.0795 20.0995 9.974 21.9995 12.5005 21.9995C20.7115 21.9995 24.5005 17.5665 24.5005 13.1335C24.5 5.5335 18.183 3 10.6055 3ZM9.0265 5.5335C9.23416 5.53363 9.43975 5.5747 9.63153 5.65434C9.8233 5.73399 9.99749 5.85066 10.1441 5.99768C10.2908 6.14471 10.407 6.31919 10.4862 6.51117C10.5654 6.70315 10.6059 6.90884 10.6055 7.1165C10.6055 7.9915 9.8985 8.7 9.0265 8.7C8.1545 8.7 7.4475 7.991 7.4475 7.1165C7.44711 6.90884 7.48765 6.70315 7.56681 6.51117C7.64598 6.31919 7.76221 6.14471 7.90886 5.99768C8.05551 5.85066 8.2297 5.73399 8.42147 5.65434C8.61325 5.5747 8.81884 5.53363 9.0265 5.5335ZM14.0785 5.5335C14.2862 5.53363 14.4918 5.5747 14.6835 5.65434C14.8753 5.73399 15.0495 5.85066 15.1961 5.99768C15.3428 6.14471 15.459 6.31919 15.5382 6.51117C15.6174 6.70315 15.6579 6.90884 15.6575 7.1165C15.658 7.3242 15.6175 7.52995 15.5383 7.72198C15.4592 7.91402 15.343 8.08856 15.1963 8.23564C15.0497 8.38271 14.8754 8.49943 14.6836 8.57911C14.4918 8.65879 14.2862 8.69987 14.0785 8.7C13.8708 8.6998 13.6653 8.65867 13.4735 8.57897C13.2818 8.49926 13.1076 8.38253 12.961 8.23546C12.8144 8.08839 12.6982 7.91387 12.6191 7.72187C12.54 7.52987 12.4995 7.32416 12.5 7.1165C12.4996 6.90889 12.5401 6.70323 12.6193 6.51129C12.6984 6.31934 12.8146 6.14488 12.9612 5.99786C13.1078 5.85085 13.2819 5.73417 13.4736 5.65449C13.6653 5.57481 13.8709 5.5337 14.0785 5.5335ZM19.1315 8.0665C19.3392 8.06656 19.5449 8.1076 19.7368 8.18725C19.9287 8.2669 20.1029 8.3836 20.2496 8.53069C20.3964 8.67777 20.5126 8.85234 20.5918 9.0444C20.6709 9.23647 20.7115 9.44226 20.711 9.65C20.7114 9.8577 20.6708 10.0634 20.5916 10.2554C20.5124 10.4475 20.3962 10.622 20.2495 10.769C20.1028 10.916 19.9285 11.0327 19.7367 11.1123C19.5448 11.1919 19.3392 11.2329 19.1315 11.233C18.9239 11.2328 18.7183 11.1917 18.5266 11.112C18.3349 11.0323 18.1608 10.9157 18.0142 10.7686C17.8676 10.6216 17.7514 10.4472 17.6723 10.2552C17.5931 10.0633 17.5526 9.85761 17.553 9.65C17.5525 9.44234 17.593 9.23663 17.6721 9.04463C17.7512 8.85263 17.8674 8.67811 18.014 8.53104C18.1606 8.38397 18.3348 8.26724 18.5265 8.18754C18.7183 8.10783 18.9238 8.0667 19.1315 8.0665ZM4.6055 9.3335C4.81307 9.3337 5.01857 9.37479 5.21026 9.45444C5.40194 9.53409 5.57605 9.65072 5.72264 9.79769C5.86923 9.94465 5.98543 10.1191 6.06459 10.3109C6.14375 10.5028 6.18433 10.7084 6.184 10.916C6.184 11.791 5.477 12.4995 4.6055 12.4995C3.734 12.4995 3.0265 11.7905 3.0265 10.916C3.02617 10.7084 3.06676 10.5027 3.14596 10.3108C3.22515 10.1189 3.34139 9.94448 3.48803 9.79751C3.63468 9.65054 3.80885 9.53391 4.00059 9.4543C4.19233 9.37468 4.39789 9.33363 4.6055 9.3335ZM12.5 15.6665C13.5465 15.6665 14.3945 16.5165 14.3945 17.567C14.3945 18.616 13.5465 19.4665 12.5 19.4665C11.4535 19.4665 10.6055 18.616 10.6055 17.567C10.605 17.3178 10.6537 17.0709 10.7487 16.8406C10.8436 16.6102 10.9831 16.4007 11.159 16.2242C11.3349 16.0477 11.5439 15.9077 11.774 15.812C12.0041 15.7163 12.2508 15.6668 12.5 15.6665Z" fill="white"/>
</svg>
        </div>
        <div className='flex items-center w-1/2 justify-between'>
            <ul className='flex gap-4 items-center pl-4'>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div>Book a session</div>
        </div>
    </nav>
  )
}

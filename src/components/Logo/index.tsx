"use client";
import Link from "next/link";

export default function Logo(props: any) {  
  const Tag = `${props.tag ? props.tag : 'span'}` as keyof JSX.IntrinsicElements;

  return (<Tag className={`logo ${props?.className ? props?.className : ''}`}>  
    <Link href="/">
      {props?.compact ? <>
        <svg width="83" height="81" viewBox="0 0 83 81" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.7712 34.3348L14.8164 7.75067L20.6661 1.98218L41.7712 22.7942L64.3293 0.550415L70.179 6.31891L41.7712 34.3348Z" fill="#E2B524"/>
          <path d="M45.6686 3.43518H37.3945V28.565H45.6686V3.43518Z" fill="#E2B524"/>
          <path d="M77.073 67.7106L48.6641 39.6983L75.6213 13.1154L81.471 18.8838L60.3635 39.6983L82.9228 61.9421L77.073 67.7106Z" fill="#E2B524"/>
          <path d="M79.9958 35.3793H54.5117V43.5376H79.9958V35.3793Z" fill="#E2B524"/>
          <path d="M45.8092 52.2607H37.5352V77.3906H45.8092V52.2607Z" fill="#E2B524"/>
          <path d="M18.8693 80.2754L13.0195 74.5069L41.4273 46.4922L68.3845 73.0751L62.5347 78.8436L41.4273 58.0292L18.8693 80.2754Z" fill="#E2B524"/>
          <path d="M7.57884 67.7106L1.7291 61.9421L22.8366 41.1277L0.277344 18.8838L6.12708 13.1154L34.536 41.1277L7.57884 67.7106Z" fill="#E2B524"/>
          <path d="M28.6872 37.2871H3.20312V45.4454H28.6872V37.2871Z" fill="#E2B524"/>
        </svg>
      </> : <>
        <svg width="425" height="141" viewBox="0 0 425 141" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M138.801 87.043C134.134 87.043 130.144 85.8482 126.831 83.4574C123.517 81.0666 120.979 77.725 119.216 73.4327C117.452 69.1404 116.57 64.1328 116.57 58.4089V57.2682C116.57 51.0022 117.452 45.5318 119.216 40.8597C120.98 36.1875 123.527 32.5466 126.858 29.9383C130.19 27.3299 134.153 26.0258 138.749 26.0258C142.063 26.0258 144.957 26.6688 147.433 27.955C149.908 29.2411 152.037 31.079 153.819 33.4698V11.1931L145.322 9.56317V1.14075H167.286V75.904L175.302 77.5339V85.9011H155.635L154.566 78.7828C152.749 81.4993 150.531 83.5547 147.913 84.9491C145.294 86.3434 142.257 87.0406 138.801 87.0406V87.043ZM142.595 76.231C145.16 76.231 147.369 75.66 149.221 74.5193C151.074 73.3786 152.606 71.721 153.817 69.5478V43.6303C152.642 41.5292 151.118 39.8716 149.247 38.6588C147.377 37.4448 145.195 36.839 142.701 36.839C139.78 36.839 137.384 37.6996 135.513 39.4197C133.643 41.1397 132.262 43.5305 131.372 46.592C130.482 49.6523 130.036 53.2114 130.036 57.2682V58.4089C130.036 63.8419 131.024 68.1703 133.002 71.3941C134.979 74.6179 138.177 76.2298 142.595 76.2298V76.231Z" fill="#E2B524"/>
          <path d="M222.542 85.901V77.5338L230.612 75.9039V11.193L222.062 9.56305V1.14062H244.026V75.9039L252.096 77.5338V85.901H222.544H222.542Z" fill="#E2B524"/>
          <path d="M260.442 85.901V77.5339L268.512 75.904V36.893H259.695V27.1135H268.512V20.2129C268.512 13.7653 270.267 8.78423 273.776 5.27078C277.285 1.75733 282.192 0 288.498 0C289.959 0 291.526 0.117796 293.201 0.353388C294.875 0.588981 296.407 0.887077 297.797 1.25008L296.461 11.5188C295.712 11.3373 294.787 11.1834 293.681 11.0572C292.577 10.931 291.49 10.8673 290.422 10.8673C287.571 10.8673 285.443 11.6642 284.035 13.2581C282.628 14.8519 281.924 17.1706 281.924 20.2129V27.1135H294.856V36.893H281.924V75.904L292.024 77.5339V85.901H260.44H260.442Z" fill="#E2B524"/>
          <path d="M326.884 87.0429C321.326 87.0429 316.552 85.7748 312.562 83.2398C308.572 80.7048 305.508 77.1817 303.37 72.6718C301.233 68.1619 300.164 62.9729 300.164 57.1047V55.964C300.164 50.1319 301.233 44.9705 303.37 40.4786C305.508 35.9867 308.572 32.4553 312.562 29.883C316.552 27.3107 321.291 26.0258 326.777 26.0258C332.264 26.0258 337.109 27.3023 341.099 29.8565C345.089 32.4108 348.153 35.9327 350.291 40.4245C352.428 44.9164 353.497 50.0958 353.497 55.964V57.1047C353.497 62.9729 352.428 68.1619 350.291 72.6718C348.153 77.1817 345.099 80.7036 341.126 83.2398C337.154 85.7748 332.406 87.0429 326.885 87.0429H326.884ZM326.884 76.5026C329.876 76.5026 332.343 75.678 334.286 74.0301C336.227 72.3821 337.679 70.0995 338.641 67.1835C339.604 64.2674 340.084 60.9078 340.084 57.1047V55.964C340.084 52.1969 339.602 48.865 338.641 45.967C337.679 43.0689 336.219 40.7875 334.259 39.1204C332.3 37.4544 329.805 36.6214 326.777 36.6214C323.75 36.6214 321.362 37.4544 319.403 39.1204C317.444 40.7863 315.992 43.0689 315.047 45.967C314.103 48.865 313.631 52.1969 313.631 55.964V57.1047C313.631 60.9078 314.103 64.2674 315.047 67.1835C315.992 70.0995 317.452 72.3809 319.43 74.0301C321.407 75.678 323.892 76.5026 326.885 76.5026H326.884Z" fill="#E2B524"/>
          <path d="M385.189 87.043C381.056 87.043 377.2 86.6355 373.62 85.8205C370.039 85.0056 366.45 83.8012 362.852 82.2073L362.691 66.6678H372.364L374.396 75.1443C375.928 75.8331 377.504 76.3668 379.125 76.7466C380.745 77.1264 382.554 77.3176 384.549 77.3176C388.397 77.3176 391.112 76.6288 392.698 75.2525C394.283 73.8762 395.076 72.1742 395.076 70.1452C395.076 68.1162 394.248 66.514 392.591 65.1197C390.935 63.7253 387.773 62.5209 383.106 61.5064C376.195 59.9847 371.109 57.767 367.85 54.851C364.59 51.9349 362.96 48.1402 362.96 43.468C362.96 40.2442 363.806 37.3282 365.498 34.7198C367.19 32.1115 369.684 30.02 372.979 28.4442C376.274 26.8684 380.327 26.0811 385.137 26.0811C389.52 26.0811 393.412 26.5426 396.814 27.467C400.217 28.3901 403.111 29.6137 405.498 31.1343L405.818 46.0763H396.253L394.596 38.3066C393.492 37.5097 392.21 36.8943 390.748 36.4591C389.287 36.024 387.613 35.8076 385.725 35.8076C382.768 35.8076 380.434 36.4687 378.724 37.791C377.014 39.1132 376.158 40.7707 376.158 42.7624C376.158 43.9212 376.435 44.9717 376.987 45.9141C377.539 46.8564 378.608 47.7159 380.193 48.4948C381.779 49.2737 384.103 50.0249 387.167 50.7497C394.685 52.5251 400.064 54.8425 403.306 57.7045C406.548 60.5665 408.169 64.3516 408.169 69.0598C408.169 74.3126 406.281 78.6229 402.504 81.9909C398.728 85.3602 392.957 87.0442 385.189 87.0442V87.043Z" fill="#E2B524"/>
          <path d="M212.803 80.492L205.264 88.1271L173.434 55.7332L203.684 24.9788L211.192 32.6439L194.015 50.0777H209.034V60.8958H193.529L212.803 80.492Z" fill="#E2B524"/>
          <path d="M52.7712 37.3348L25.8164 10.7507L31.6661 4.98218L52.7712 25.7942L75.3293 3.55042L81.179 9.31891L52.7712 37.3348Z" fill="#E2B524"/>
          <path d="M56.6686 6.43518H48.3945V31.565H56.6686V6.43518Z" fill="#E2B524"/>
          <path d="M88.073 70.7106L59.6641 42.6983L86.6213 16.1154L92.471 21.8838L71.3635 42.6983L93.9228 64.9421L88.073 70.7106Z" fill="#E2B524"/>
          <path d="M90.9958 38.3793H65.5117V46.5376H90.9958V38.3793Z" fill="#E2B524"/>
          <path d="M56.8092 55.2607H48.5352V80.3906H56.8092V55.2607Z" fill="#E2B524"/>
          <path d="M29.8693 83.2754L24.0195 77.5069L52.4273 49.4922L79.3845 76.0751L73.5347 81.8436L52.4273 61.0292L29.8693 83.2754Z" fill="#E2B524"/>
          <path d="M18.5788 70.7106L12.7291 64.9421L33.8366 44.1277L11.2773 21.8838L17.1271 16.1154L45.536 44.1277L18.5788 70.7106Z" fill="#E2B524"/>
          <path d="M39.6872 40.2871H14.2031V48.4454H39.6872V40.2871Z" fill="#E2B524"/>
          <path d="M9.16016 125.246C7.44922 125.246 6.01953 124.871 4.87109 124.121C3.73047 123.371 2.87109 122.344 2.29297 121.039C1.72266 119.734 1.4375 118.254 1.4375 116.598V116.352C1.4375 114.68 1.73828 113.195 2.33984 111.898C2.94141 110.594 3.80469 109.566 4.92969 108.816C6.05469 108.066 7.39844 107.691 8.96094 107.691C10.0625 107.691 11.0703 107.863 11.9844 108.207C12.8984 108.551 13.6562 108.988 14.2578 109.52V113.199H12.418L12.1719 110.504C11.9219 110.309 11.6328 110.145 11.3047 110.012C10.9844 109.879 10.625 109.777 10.2266 109.707C9.83594 109.637 9.41016 109.602 8.94922 109.602C7.83203 109.602 6.88672 109.891 6.11328 110.469C5.33984 111.039 4.75391 111.828 4.35547 112.836C3.95703 113.844 3.75781 115.008 3.75781 116.328V116.598C3.75781 118.027 3.96875 119.25 4.39062 120.266C4.82031 121.273 5.44141 122.043 6.25391 122.574C7.07422 123.105 8.07031 123.371 9.24219 123.371C9.78906 123.371 10.3242 123.305 10.8477 123.172C11.3711 123.039 11.8047 122.867 12.1484 122.656L12.4062 120.277H14.2109V123.98C13.5703 124.379 12.8047 124.691 11.9141 124.918C11.0234 125.137 10.1055 125.246 9.16016 125.246ZM22.2617 125.246C21.0898 125.246 20.0703 124.98 19.2031 124.449C18.3359 123.91 17.6641 123.164 17.1875 122.211C16.7188 121.258 16.4844 120.156 16.4844 118.906V118.391C16.4844 117.188 16.7305 116.113 17.2227 115.168C17.7227 114.215 18.3828 113.465 19.2031 112.918C20.0312 112.363 20.9336 112.086 21.9102 112.086C23.0508 112.086 24.0039 112.32 24.7695 112.789C25.543 113.258 26.125 113.918 26.5156 114.77C26.9062 115.613 27.1016 116.609 27.1016 117.758V119.199H18.875L18.8398 119.258C18.8555 120.07 18.9961 120.793 19.2617 121.426C19.5352 122.051 19.9258 122.543 20.4336 122.902C20.9414 123.262 21.5508 123.441 22.2617 123.441C23.043 123.441 23.7266 123.332 24.3125 123.113C24.9062 122.887 25.418 122.578 25.8477 122.188L26.75 123.688C26.2969 124.125 25.6953 124.496 24.9453 124.801C24.2031 125.098 23.3086 125.246 22.2617 125.246ZM18.9453 117.395H24.793V117.09C24.793 116.48 24.6836 115.938 24.4648 115.461C24.2539 114.977 23.9336 114.598 23.5039 114.324C23.082 114.043 22.5508 113.902 21.9102 113.902C21.3945 113.902 20.9258 114.055 20.5039 114.359C20.082 114.656 19.7344 115.062 19.4609 115.578C19.1875 116.094 19.0078 116.68 18.9219 117.336L18.9453 117.395ZM28.9062 125V123.523L30.8164 123.195V114.137L28.9062 113.809V112.32H32.8789L33.043 114.207C33.4648 113.535 33.9922 113.016 34.625 112.648C35.2656 112.273 35.9922 112.086 36.8047 112.086C38.1719 112.086 39.2305 112.488 39.9805 113.293C40.7305 114.09 41.1055 115.324 41.1055 116.996V123.195L43.0156 123.523V125H36.8867V123.523L38.7969 123.195V117.043C38.7969 115.926 38.5742 115.133 38.1289 114.664C37.6914 114.195 37.0195 113.961 36.1133 113.961C35.4492 113.961 34.8594 114.121 34.3438 114.441C33.8359 114.762 33.4297 115.199 33.125 115.754V123.195L35.0352 123.523V125H28.9062ZM48.6641 125.199C47.7266 125.199 46.9805 124.926 46.4258 124.379C45.8789 123.824 45.6055 122.941 45.6055 121.73V114.031H43.6016V112.32H45.6055V109.262H47.9141V112.32H50.668V114.031H47.9141V121.73C47.9141 122.34 48.0352 122.789 48.2773 123.078C48.5195 123.367 48.8438 123.512 49.25 123.512C49.5234 123.512 49.8281 123.488 50.1641 123.441C50.5 123.387 50.7617 123.34 50.9492 123.301L51.2656 124.812C50.9297 124.914 50.5156 125.004 50.0234 125.082C49.5391 125.16 49.0859 125.199 48.6641 125.199ZM52.7188 125V123.523L54.6289 123.195V114.137L52.7188 113.809V112.32H56.6914L56.8906 113.938L56.9141 114.16C57.2734 113.512 57.7148 113.004 58.2383 112.637C58.7695 112.27 59.375 112.086 60.0547 112.086C60.2969 112.086 60.543 112.109 60.793 112.156C61.0508 112.195 61.2344 112.234 61.3438 112.273L61.0391 114.418L59.4336 114.324C58.8242 114.285 58.3125 114.426 57.8984 114.746C57.4844 115.059 57.1641 115.48 56.9375 116.012V123.195L58.8477 123.523V125H52.7188ZM68.2461 125.246C67.0742 125.246 66.0625 124.973 65.2109 124.426C64.3672 123.871 63.7148 123.109 63.2539 122.141C62.793 121.164 62.5625 120.051 62.5625 118.801V118.543C62.5625 117.293 62.793 116.184 63.2539 115.215C63.7148 114.238 64.3672 113.473 65.2109 112.918C66.0625 112.363 67.0664 112.086 68.2227 112.086C69.3945 112.086 70.4023 112.363 71.2461 112.918C72.0977 113.473 72.7539 114.234 73.2148 115.203C73.6758 116.172 73.9062 117.285 73.9062 118.543V118.801C73.9062 120.059 73.6758 121.176 73.2148 122.152C72.7539 123.121 72.1016 123.879 71.2578 124.426C70.4141 124.973 69.4102 125.246 68.2461 125.246ZM68.2461 123.441C68.9805 123.441 69.5938 123.242 70.0859 122.844C70.5859 122.438 70.9609 121.887 71.2109 121.191C71.4688 120.488 71.5977 119.691 71.5977 118.801V118.543C71.5977 117.652 71.4688 116.859 71.2109 116.164C70.9609 115.461 70.5859 114.91 70.0859 114.512C69.5859 114.105 68.9648 113.902 68.2227 113.902C67.4883 113.902 66.8711 114.105 66.3711 114.512C65.8711 114.91 65.4961 115.461 65.2461 116.164C64.9961 116.859 64.8711 117.652 64.8711 118.543V118.801C64.8711 119.691 64.9961 120.488 65.2461 121.191C65.4961 121.887 65.8711 122.438 66.3711 122.844C66.8789 123.242 67.5039 123.441 68.2461 123.441ZM86.6445 125.246C85.6133 125.246 84.7266 124.992 83.9844 124.484C83.25 123.969 82.6875 123.254 82.2969 122.34C81.9062 121.426 81.7109 120.359 81.7109 119.141V118.895C81.7109 117.535 81.9062 116.344 82.2969 115.32C82.6875 114.297 83.2539 113.504 83.9961 112.941C84.7383 112.371 85.6289 112.086 86.668 112.086C87.418 112.086 88.0781 112.227 88.6484 112.508C89.2266 112.781 89.7188 113.18 90.125 113.703V108.535L88.2148 108.207V106.719H90.125H92.4336V123.195L94.3438 123.523V125H90.4297L90.2422 123.488C89.8281 124.066 89.3203 124.504 88.7188 124.801C88.125 125.098 87.4336 125.246 86.6445 125.246ZM87.2305 123.371C87.918 123.371 88.4961 123.215 88.9648 122.902C89.4336 122.59 89.8203 122.148 90.125 121.578V115.695C89.8281 115.164 89.4414 114.742 88.9648 114.43C88.4883 114.117 87.918 113.961 87.2539 113.961C86.5195 113.961 85.9141 114.172 85.4375 114.594C84.9609 115.008 84.6055 115.586 84.3711 116.328C84.1367 117.062 84.0195 117.918 84.0195 118.895V119.141C84.0195 120.414 84.2812 121.438 84.8047 122.211C85.3281 122.984 86.1367 123.371 87.2305 123.371ZM101.645 125.246C100.473 125.246 99.4531 124.98 98.5859 124.449C97.7188 123.91 97.0469 123.164 96.5703 122.211C96.1016 121.258 95.8672 120.156 95.8672 118.906V118.391C95.8672 117.188 96.1133 116.113 96.6055 115.168C97.1055 114.215 97.7656 113.465 98.5859 112.918C99.4141 112.363 100.316 112.086 101.293 112.086C102.434 112.086 103.387 112.32 104.152 112.789C104.926 113.258 105.508 113.918 105.898 114.77C106.289 115.613 106.484 116.609 106.484 117.758V119.199H98.2578L98.2227 119.258C98.2383 120.07 98.3789 120.793 98.6445 121.426C98.918 122.051 99.3086 122.543 99.8164 122.902C100.324 123.262 100.934 123.441 101.645 123.441C102.426 123.441 103.109 123.332 103.695 123.113C104.289 122.887 104.801 122.578 105.23 122.188L106.133 123.688C105.68 124.125 105.078 124.496 104.328 124.801C103.586 125.098 102.691 125.246 101.645 125.246ZM98.3281 117.395H104.176V117.09C104.176 116.48 104.066 115.938 103.848 115.461C103.637 114.977 103.316 114.598 102.887 114.324C102.465 114.043 101.934 113.902 101.293 113.902C100.777 113.902 100.309 114.055 99.8867 114.359C99.4648 114.656 99.1172 115.062 98.8438 115.578C98.5703 116.094 98.3906 116.68 98.3047 117.336L98.3281 117.395ZM114.5 125V123.523L116.41 123.195V109.754L114.5 109.426V107.938H116.41H119.492L124.988 120.887H125.059L130.379 107.938H135.523V109.426L133.613 109.754V123.195L135.523 123.523V125H129.395V123.523L131.41 123.195V118.25V111.09L131.352 111.078L125.809 124.391H124.273L118.543 111.102L118.484 111.113L118.566 118.25V123.195L120.629 123.523V125H114.5ZM143.223 125.246C142.051 125.246 141.039 124.973 140.188 124.426C139.344 123.871 138.691 123.109 138.23 122.141C137.77 121.164 137.539 120.051 137.539 118.801V118.543C137.539 117.293 137.77 116.184 138.23 115.215C138.691 114.238 139.344 113.473 140.188 112.918C141.039 112.363 142.043 112.086 143.199 112.086C144.371 112.086 145.379 112.363 146.223 112.918C147.074 113.473 147.73 114.234 148.191 115.203C148.652 116.172 148.883 117.285 148.883 118.543V118.801C148.883 120.059 148.652 121.176 148.191 122.152C147.73 123.121 147.078 123.879 146.234 124.426C145.391 124.973 144.387 125.246 143.223 125.246ZM143.223 123.441C143.957 123.441 144.57 123.242 145.062 122.844C145.562 122.438 145.938 121.887 146.188 121.191C146.445 120.488 146.574 119.691 146.574 118.801V118.543C146.574 117.652 146.445 116.859 146.188 116.164C145.938 115.461 145.562 114.91 145.062 114.512C144.562 114.105 143.941 113.902 143.199 113.902C142.465 113.902 141.848 114.105 141.348 114.512C140.848 114.91 140.473 115.461 140.223 116.164C139.973 116.859 139.848 117.652 139.848 118.543V118.801C139.848 119.691 139.973 120.488 140.223 121.191C140.473 121.887 140.848 122.438 141.348 122.844C141.855 123.242 142.48 123.441 143.223 123.441ZM150.664 125V123.523L152.574 123.195V114.137L150.664 113.809V112.32H154.637L154.801 114.207C155.223 113.535 155.75 113.016 156.383 112.648C157.023 112.273 157.75 112.086 158.562 112.086C159.93 112.086 160.988 112.488 161.738 113.293C162.488 114.09 162.863 115.324 162.863 116.996V123.195L164.773 123.523V125H158.645V123.523L160.555 123.195V117.043C160.555 115.926 160.332 115.133 159.887 114.664C159.449 114.195 158.777 113.961 157.871 113.961C157.207 113.961 156.617 114.121 156.102 114.441C155.594 114.762 155.188 115.199 154.883 115.754V123.195L156.793 123.523V125H150.664ZM166.332 125V123.523L168.242 123.195V114.137L166.332 113.809V112.32H170.551V123.195L172.461 123.523V125H166.332ZM168.125 109.191V106.719H170.551V109.191H168.125ZM178.531 125.199C177.594 125.199 176.848 124.926 176.293 124.379C175.746 123.824 175.473 122.941 175.473 121.73V114.031H173.469V112.32H175.473V109.262H177.781V112.32H180.535V114.031H177.781V121.73C177.781 122.34 177.902 122.789 178.145 123.078C178.387 123.367 178.711 123.512 179.117 123.512C179.391 123.512 179.695 123.488 180.031 123.441C180.367 123.387 180.629 123.34 180.816 123.301L181.133 124.812C180.797 124.914 180.383 125.004 179.891 125.082C179.406 125.16 178.953 125.199 178.531 125.199ZM188.105 125.246C186.934 125.246 185.922 124.973 185.07 124.426C184.227 123.871 183.574 123.109 183.113 122.141C182.652 121.164 182.422 120.051 182.422 118.801V118.543C182.422 117.293 182.652 116.184 183.113 115.215C183.574 114.238 184.227 113.473 185.07 112.918C185.922 112.363 186.926 112.086 188.082 112.086C189.254 112.086 190.262 112.363 191.105 112.918C191.957 113.473 192.613 114.234 193.074 115.203C193.535 116.172 193.766 117.285 193.766 118.543V118.801C193.766 120.059 193.535 121.176 193.074 122.152C192.613 123.121 191.961 123.879 191.117 124.426C190.273 124.973 189.27 125.246 188.105 125.246ZM188.105 123.441C188.84 123.441 189.453 123.242 189.945 122.844C190.445 122.438 190.82 121.887 191.07 121.191C191.328 120.488 191.457 119.691 191.457 118.801V118.543C191.457 117.652 191.328 116.859 191.07 116.164C190.82 115.461 190.445 114.91 189.945 114.512C189.445 114.105 188.824 113.902 188.082 113.902C187.348 113.902 186.73 114.105 186.23 114.512C185.73 114.91 185.355 115.461 185.105 116.164C184.855 116.859 184.73 117.652 184.73 118.543V118.801C184.73 119.691 184.855 120.488 185.105 121.191C185.355 121.887 185.73 122.438 186.23 122.844C186.738 123.242 187.363 123.441 188.105 123.441ZM195.523 125V123.523L197.434 123.195V114.137L195.523 113.809V112.32H199.496L199.695 113.938L199.719 114.16C200.078 113.512 200.52 113.004 201.043 112.637C201.574 112.27 202.18 112.086 202.859 112.086C203.102 112.086 203.348 112.109 203.598 112.156C203.855 112.195 204.039 112.234 204.148 112.273L203.844 114.418L202.238 114.324C201.629 114.285 201.117 114.426 200.703 114.746C200.289 115.059 199.969 115.48 199.742 116.012V123.195L201.652 123.523V125H195.523ZM209.656 125.246C208.336 125.246 207.332 124.926 206.645 124.285C205.957 123.637 205.613 122.727 205.613 121.555C205.613 120.75 205.832 120.051 206.27 119.457C206.715 118.855 207.355 118.391 208.191 118.062C209.027 117.727 210.027 117.559 211.191 117.559H213.453V116.316C213.453 115.551 213.219 114.957 212.75 114.535C212.289 114.113 211.637 113.902 210.793 113.902C210.262 113.902 209.801 113.969 209.41 114.102C209.02 114.227 208.664 114.402 208.344 114.629L208.098 116.398H206.316V113.492C206.887 113.031 207.551 112.684 208.309 112.449C209.066 112.207 209.906 112.086 210.828 112.086C212.367 112.086 213.574 112.453 214.449 113.188C215.324 113.922 215.762 114.973 215.762 116.34V122.445C215.762 122.609 215.762 122.77 215.762 122.926C215.77 123.082 215.781 123.238 215.797 123.395L217.027 123.523V125H213.711C213.641 124.656 213.586 124.348 213.547 124.074C213.508 123.801 213.48 123.527 213.465 123.254C213.02 123.824 212.461 124.301 211.789 124.684C211.125 125.059 210.414 125.246 209.656 125.246ZM209.996 123.312C210.762 123.312 211.461 123.129 212.094 122.762C212.727 122.395 213.18 121.953 213.453 121.438V119.141H211.109C210.047 119.141 209.25 119.395 208.719 119.902C208.188 120.41 207.922 120.977 207.922 121.602C207.922 122.156 208.094 122.582 208.438 122.879C208.781 123.168 209.301 123.312 209.996 123.312ZM218.82 125V123.523L220.73 123.195V114.137L218.82 113.809V112.32H222.805L222.957 113.973C223.363 113.371 223.887 112.906 224.527 112.578C225.168 112.25 225.91 112.086 226.754 112.086C227.598 112.086 228.32 112.281 228.922 112.672C229.531 113.062 229.988 113.648 230.293 114.43C230.691 113.711 231.219 113.141 231.875 112.719C232.531 112.297 233.297 112.086 234.172 112.086C235.469 112.086 236.492 112.531 237.242 113.422C237.992 114.305 238.367 115.637 238.367 117.418V123.195L240.277 123.523V125H234.137V123.523L236.047 123.195V117.395C236.047 116.145 235.832 115.262 235.402 114.746C234.973 114.223 234.336 113.961 233.492 113.961C232.688 113.961 232.039 114.246 231.547 114.816C231.062 115.379 230.781 116.09 230.703 116.949V123.195L232.613 123.523V125H226.484V123.523L228.395 123.195V117.395C228.395 116.207 228.172 115.34 227.727 114.793C227.289 114.238 226.652 113.961 225.816 113.961C225.113 113.961 224.535 114.105 224.082 114.395C223.629 114.684 223.281 115.09 223.039 115.613V123.195L224.949 123.523V125H218.82ZM247.59 125.246C246.418 125.246 245.398 124.98 244.531 124.449C243.664 123.91 242.992 123.164 242.516 122.211C242.047 121.258 241.812 120.156 241.812 118.906V118.391C241.812 117.188 242.059 116.113 242.551 115.168C243.051 114.215 243.711 113.465 244.531 112.918C245.359 112.363 246.262 112.086 247.238 112.086C248.379 112.086 249.332 112.32 250.098 112.789C250.871 113.258 251.453 113.918 251.844 114.77C252.234 115.613 252.43 116.609 252.43 117.758V119.199H244.203L244.168 119.258C244.184 120.07 244.324 120.793 244.59 121.426C244.863 122.051 245.254 122.543 245.762 122.902C246.27 123.262 246.879 123.441 247.59 123.441C248.371 123.441 249.055 123.332 249.641 123.113C250.234 122.887 250.746 122.578 251.176 122.188L252.078 123.688C251.625 124.125 251.023 124.496 250.273 124.801C249.531 125.098 248.637 125.246 247.59 125.246ZM244.273 117.395H250.121V117.09C250.121 116.48 250.012 115.938 249.793 115.461C249.582 114.977 249.262 114.598 248.832 114.324C248.41 114.043 247.879 113.902 247.238 113.902C246.723 113.902 246.254 114.055 245.832 114.359C245.41 114.656 245.062 115.062 244.789 115.578C244.516 116.094 244.336 116.68 244.25 117.336L244.273 117.395ZM254.234 125V123.523L256.145 123.195V114.137L254.234 113.809V112.32H258.207L258.371 114.207C258.793 113.535 259.32 113.016 259.953 112.648C260.594 112.273 261.32 112.086 262.133 112.086C263.5 112.086 264.559 112.488 265.309 113.293C266.059 114.09 266.434 115.324 266.434 116.996V123.195L268.344 123.523V125H262.215V123.523L264.125 123.195V117.043C264.125 115.926 263.902 115.133 263.457 114.664C263.02 114.195 262.348 113.961 261.441 113.961C260.777 113.961 260.188 114.121 259.672 114.441C259.164 114.762 258.758 115.199 258.453 115.754V123.195L260.363 123.523V125H254.234ZM273.992 125.199C273.055 125.199 272.309 124.926 271.754 124.379C271.207 123.824 270.934 122.941 270.934 121.73V114.031H268.93V112.32H270.934V109.262H273.242V112.32H275.996V114.031H273.242V121.73C273.242 122.34 273.363 122.789 273.605 123.078C273.848 123.367 274.172 123.512 274.578 123.512C274.852 123.512 275.156 123.488 275.492 123.441C275.828 123.387 276.09 123.34 276.277 123.301L276.594 124.812C276.258 124.914 275.844 125.004 275.352 125.082C274.867 125.16 274.414 125.199 273.992 125.199ZM283.566 125.246C282.395 125.246 281.383 124.973 280.531 124.426C279.688 123.871 279.035 123.109 278.574 122.141C278.113 121.164 277.883 120.051 277.883 118.801V118.543C277.883 117.293 278.113 116.184 278.574 115.215C279.035 114.238 279.688 113.473 280.531 112.918C281.383 112.363 282.387 112.086 283.543 112.086C284.715 112.086 285.723 112.363 286.566 112.918C287.418 113.473 288.074 114.234 288.535 115.203C288.996 116.172 289.227 117.285 289.227 118.543V118.801C289.227 120.059 288.996 121.176 288.535 122.152C288.074 123.121 287.422 123.879 286.578 124.426C285.734 124.973 284.73 125.246 283.566 125.246ZM283.566 123.441C284.301 123.441 284.914 123.242 285.406 122.844C285.906 122.438 286.281 121.887 286.531 121.191C286.789 120.488 286.918 119.691 286.918 118.801V118.543C286.918 117.652 286.789 116.859 286.531 116.164C286.281 115.461 285.906 114.91 285.406 114.512C284.906 114.105 284.285 113.902 283.543 113.902C282.809 113.902 282.191 114.105 281.691 114.512C281.191 114.91 280.816 115.461 280.566 116.164C280.316 116.859 280.191 117.652 280.191 118.543V118.801C280.191 119.691 280.316 120.488 280.566 121.191C280.816 121.887 281.191 122.438 281.691 122.844C282.199 123.242 282.824 123.441 283.566 123.441ZM301.965 125.246C300.934 125.246 300.047 124.992 299.305 124.484C298.57 123.969 298.008 123.254 297.617 122.34C297.227 121.426 297.031 120.359 297.031 119.141V118.895C297.031 117.535 297.227 116.344 297.617 115.32C298.008 114.297 298.574 113.504 299.316 112.941C300.059 112.371 300.949 112.086 301.988 112.086C302.738 112.086 303.398 112.227 303.969 112.508C304.547 112.781 305.039 113.18 305.445 113.703V108.535L303.535 108.207V106.719H305.445H307.754V123.195L309.664 123.523V125H305.75L305.562 123.488C305.148 124.066 304.641 124.504 304.039 124.801C303.445 125.098 302.754 125.246 301.965 125.246ZM302.551 123.371C303.238 123.371 303.816 123.215 304.285 122.902C304.754 122.59 305.141 122.148 305.445 121.578V115.695C305.148 115.164 304.762 114.742 304.285 114.43C303.809 114.117 303.238 113.961 302.574 113.961C301.84 113.961 301.234 114.172 300.758 114.594C300.281 115.008 299.926 115.586 299.691 116.328C299.457 117.062 299.34 117.918 299.34 118.895V119.141C299.34 120.414 299.602 121.438 300.125 122.211C300.648 122.984 301.457 123.371 302.551 123.371ZM316.965 125.246C315.793 125.246 314.773 124.98 313.906 124.449C313.039 123.91 312.367 123.164 311.891 122.211C311.422 121.258 311.188 120.156 311.188 118.906V118.391C311.188 117.188 311.434 116.113 311.926 115.168C312.426 114.215 313.086 113.465 313.906 112.918C314.734 112.363 315.637 112.086 316.613 112.086C317.754 112.086 318.707 112.32 319.473 112.789C320.246 113.258 320.828 113.918 321.219 114.77C321.609 115.613 321.805 116.609 321.805 117.758V119.199H313.578L313.543 119.258C313.559 120.07 313.699 120.793 313.965 121.426C314.238 122.051 314.629 122.543 315.137 122.902C315.645 123.262 316.254 123.441 316.965 123.441C317.746 123.441 318.43 123.332 319.016 123.113C319.609 122.887 320.121 122.578 320.551 122.188L321.453 123.688C321 124.125 320.398 124.496 319.648 124.801C318.906 125.098 318.012 125.246 316.965 125.246ZM313.648 117.395H319.496V117.09C319.496 116.48 319.387 115.938 319.168 115.461C318.957 114.977 318.637 114.598 318.207 114.324C317.785 114.043 317.254 113.902 316.613 113.902C316.098 113.902 315.629 114.055 315.207 114.359C314.785 114.656 314.438 115.062 314.164 115.578C313.891 116.094 313.711 116.68 313.625 117.336L313.648 117.395ZM337.379 125.246C335.668 125.246 334.238 124.871 333.09 124.121C331.949 123.371 331.09 122.344 330.512 121.039C329.941 119.734 329.656 118.254 329.656 116.598V116.352C329.656 114.68 329.957 113.195 330.559 111.898C331.16 110.594 332.023 109.566 333.148 108.816C334.273 108.066 335.617 107.691 337.18 107.691C338.281 107.691 339.289 107.863 340.203 108.207C341.117 108.551 341.875 108.988 342.477 109.52V113.199H340.637L340.391 110.504C340.141 110.309 339.852 110.145 339.523 110.012C339.203 109.879 338.844 109.777 338.445 109.707C338.055 109.637 337.629 109.602 337.168 109.602C336.051 109.602 335.105 109.891 334.332 110.469C333.559 111.039 332.973 111.828 332.574 112.836C332.176 113.844 331.977 115.008 331.977 116.328V116.598C331.977 118.027 332.188 119.25 332.609 120.266C333.039 121.273 333.66 122.043 334.473 122.574C335.293 123.105 336.289 123.371 337.461 123.371C338.008 123.371 338.543 123.305 339.066 123.172C339.59 123.039 340.023 122.867 340.367 122.656L340.625 120.277H342.43V123.98C341.789 124.379 341.023 124.691 340.133 124.918C339.242 125.137 338.324 125.246 337.379 125.246ZM344.586 125V123.523L346.496 123.195V108.535L344.586 108.207V106.719H348.805V123.195L350.715 123.523V125H344.586ZM352.285 125V123.523L354.195 123.195V114.137L352.285 113.809V112.32H356.504V123.195L358.414 123.523V125H352.285ZM354.078 109.191V106.719H356.504V109.191H354.078ZM365.785 125.246C364.613 125.246 363.594 124.98 362.727 124.449C361.859 123.91 361.188 123.164 360.711 122.211C360.242 121.258 360.008 120.156 360.008 118.906V118.391C360.008 117.188 360.254 116.113 360.746 115.168C361.246 114.215 361.906 113.465 362.727 112.918C363.555 112.363 364.457 112.086 365.434 112.086C366.574 112.086 367.527 112.32 368.293 112.789C369.066 113.258 369.648 113.918 370.039 114.77C370.43 115.613 370.625 116.609 370.625 117.758V119.199H362.398L362.363 119.258C362.379 120.07 362.52 120.793 362.785 121.426C363.059 122.051 363.449 122.543 363.957 122.902C364.465 123.262 365.074 123.441 365.785 123.441C366.566 123.441 367.25 123.332 367.836 123.113C368.43 122.887 368.941 122.578 369.371 122.188L370.273 123.688C369.82 124.125 369.219 124.496 368.469 124.801C367.727 125.098 366.832 125.246 365.785 125.246ZM362.469 117.395H368.316V117.09C368.316 116.48 368.207 115.938 367.988 115.461C367.777 114.977 367.457 114.598 367.027 114.324C366.605 114.043 366.074 113.902 365.434 113.902C364.918 113.902 364.449 114.055 364.027 114.359C363.605 114.656 363.258 115.062 362.984 115.578C362.711 116.094 362.531 116.68 362.445 117.336L362.469 117.395ZM372.43 125V123.523L374.34 123.195V114.137L372.43 113.809V112.32H376.402L376.566 114.207C376.988 113.535 377.516 113.016 378.148 112.648C378.789 112.273 379.516 112.086 380.328 112.086C381.695 112.086 382.754 112.488 383.504 113.293C384.254 114.09 384.629 115.324 384.629 116.996V123.195L386.539 123.523V125H380.41V123.523L382.32 123.195V117.043C382.32 115.926 382.098 115.133 381.652 114.664C381.215 114.195 380.543 113.961 379.637 113.961C378.973 113.961 378.383 114.121 377.867 114.441C377.359 114.762 376.953 115.199 376.648 115.754V123.195L378.559 123.523V125H372.43ZM392.188 125.199C391.25 125.199 390.504 124.926 389.949 124.379C389.402 123.824 389.129 122.941 389.129 121.73V114.031H387.125V112.32H389.129V109.262H391.438V112.32H394.191V114.031H391.438V121.73C391.438 122.34 391.559 122.789 391.801 123.078C392.043 123.367 392.367 123.512 392.773 123.512C393.047 123.512 393.352 123.488 393.688 123.441C394.023 123.387 394.285 123.34 394.473 123.301L394.789 124.812C394.453 124.914 394.039 125.004 393.547 125.082C393.062 125.16 392.609 125.199 392.188 125.199ZM401.809 125.246C400.637 125.246 399.617 124.98 398.75 124.449C397.883 123.91 397.211 123.164 396.734 122.211C396.266 121.258 396.031 120.156 396.031 118.906V118.391C396.031 117.188 396.277 116.113 396.77 115.168C397.27 114.215 397.93 113.465 398.75 112.918C399.578 112.363 400.48 112.086 401.457 112.086C402.598 112.086 403.551 112.32 404.316 112.789C405.09 113.258 405.672 113.918 406.062 114.77C406.453 115.613 406.648 116.609 406.648 117.758V119.199H398.422L398.387 119.258C398.402 120.07 398.543 120.793 398.809 121.426C399.082 122.051 399.473 122.543 399.98 122.902C400.488 123.262 401.098 123.441 401.809 123.441C402.59 123.441 403.273 123.332 403.859 123.113C404.453 122.887 404.965 122.578 405.395 122.188L406.297 123.688C405.844 124.125 405.242 124.496 404.492 124.801C403.75 125.098 402.855 125.246 401.809 125.246ZM398.492 117.395H404.34V117.09C404.34 116.48 404.23 115.938 404.012 115.461C403.801 114.977 403.48 114.598 403.051 114.324C402.629 114.043 402.098 113.902 401.457 113.902C400.941 113.902 400.473 114.055 400.051 114.359C399.629 114.656 399.281 115.062 399.008 115.578C398.734 116.094 398.555 116.68 398.469 117.336L398.492 117.395ZM413.656 125.246C412.805 125.246 412.008 125.16 411.266 124.988C410.523 124.816 409.734 124.551 408.898 124.191L408.875 121.18H410.621L411.055 122.996C411.492 123.176 411.914 123.309 412.32 123.395C412.734 123.473 413.18 123.512 413.656 123.512C414.594 123.512 415.266 123.332 415.672 122.973C416.078 122.613 416.281 122.168 416.281 121.637C416.281 121.137 416.074 120.715 415.66 120.371C415.254 120.02 414.512 119.723 413.434 119.48C411.902 119.129 410.773 118.66 410.047 118.074C409.328 117.48 408.969 116.691 408.969 115.707C408.969 115.02 409.168 114.406 409.566 113.867C409.965 113.32 410.52 112.887 411.23 112.566C411.941 112.246 412.77 112.086 413.715 112.086C414.676 112.086 415.496 112.195 416.176 112.414C416.863 112.633 417.461 112.926 417.969 113.293L418.086 116.188H416.352L415.977 114.5C415.703 114.297 415.379 114.141 415.004 114.031C414.629 113.922 414.199 113.867 413.715 113.867C412.996 113.867 412.41 114.035 411.957 114.371C411.512 114.707 411.289 115.129 411.289 115.637C411.289 115.934 411.352 116.191 411.477 116.41C411.609 116.629 411.859 116.828 412.227 117.008C412.594 117.18 413.133 117.352 413.844 117.523C415.609 117.938 416.84 118.465 417.535 119.105C418.238 119.746 418.59 120.535 418.59 121.473C418.59 122.543 418.191 123.441 417.395 124.168C416.605 124.887 415.359 125.246 413.656 125.246Z" fill="#E2B524"/>
        </svg>
      </>}
    </Link>
  </Tag>);
};
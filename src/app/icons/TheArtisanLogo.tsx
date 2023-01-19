import { useTheme } from 'styled-components';

import { VectorProps } from '../theme/theme.types';

export default function TheArtisanLogo({
  height = 48,
  style,
  className,
  variant = 'logo',
}: VectorProps & { variant?: 'logo' | 'isotype' }) {
  const theme = useTheme();

  let children;
  let viewBox;

  const isotypePrimaryColor =
    theme.mode === 'light'
      ? theme.palette.primary.light
      : theme.palette.background.level3;

  switch (variant) {
    case 'logo':
      viewBox = '0 0 401 100';
      children = (
        <>
          <path
            d="M43.5312 63.6562C43.5312 65.8021 43.8958 67.5312 44.625 68.8438C45.3542 70.1562 46.3229 71.1146 47.5312 71.7188C48.7396 72.3021 50.0938 72.5938 51.5938 72.5938C53.2604 72.5938 54.7292 72.3021 56 71.7188C57.2708 71.1354 58.1875 70.4479 58.75 69.6562V68.1875C58.2708 68.625 57.6771 68.9688 56.9688 69.2188C56.2604 69.4479 55.5104 69.5521 54.7188 69.5312C53.2396 69.5312 52 69.0729 51 68.1562C50 67.2188 49.5 65.5625 49.5 63.1875V43.6562L58.2812 43.9062V41.4688L49.5 41.7812V35.5625H48.8438L39.5312 42.875V43.9062H43.5312V63.6562ZM70.9688 25.7188L60.9688 26.875V28.1562L63.0312 28.7188C63.8854 28.9896 64.4271 29.2708 64.6562 29.5625C64.8854 29.8542 65 30.4167 65 31.25V67.5C65 68.5417 64.7708 69.25 64.3125 69.625C63.8542 70 62.7396 70.3021 60.9688 70.5312V72H74.7812V70.5312C73.0729 70.3229 72.0104 70.0417 71.5938 69.6875C71.1771 69.3125 70.9688 68.6458 70.9688 67.6875V47.75C71.6354 46.6667 72.5833 45.7812 73.8125 45.0938C75.0417 44.4062 76.5104 44.0625 78.2188 44.0625C80.4896 44.0625 82.2604 44.7292 83.5312 46.0625C84.8021 47.375 85.4375 49.3438 85.4375 51.9688V67.6875C85.4375 68.6458 85.2292 69.3125 84.8125 69.6875C84.3958 70.0417 83.3438 70.3229 81.6562 70.5312V72H95.4688V70.5312C93.6562 70.3021 92.5312 70 92.0938 69.625C91.6562 69.25 91.4375 68.5417 91.4375 67.5V50.5C91.4375 47.3125 90.4583 44.9167 88.5 43.3125C86.5417 41.7083 84.0312 40.9062 80.9688 40.9062C78.6771 40.9062 76.6667 41.3958 74.9375 42.375C73.2083 43.3542 71.8854 44.625 70.9688 46.1875V25.7188ZM99.5938 56.8125C99.5938 60 100.24 62.7812 101.531 65.1562C102.844 67.5104 104.625 69.3438 106.875 70.6562C109.146 71.9479 111.719 72.5938 114.594 72.5938C117.177 72.5938 119.438 72.1458 121.375 71.25C123.333 70.3542 124.823 69.2188 125.844 67.8438V66.375C124.927 67.2708 123.771 68.0104 122.375 68.5938C121 69.1562 119.458 69.4375 117.75 69.4375C115.312 69.4375 113.188 68.8229 111.375 67.5938C109.583 66.3438 108.188 64.625 107.188 62.4375C106.188 60.25 105.688 57.7188 105.688 54.8438C105.688 50.9479 106.417 47.9896 107.875 45.9688C109.354 43.9271 111.344 42.9062 113.844 42.9062C115.365 42.9062 116.625 43.3229 117.625 44.1562C118.646 44.9896 119.406 46.1458 119.906 47.625C120.406 49.0833 120.656 50.7812 120.656 52.7188C120.656 53.0104 120.646 53.2812 120.625 53.5312C120.625 53.7812 120.615 54.0208 120.594 54.25L121.219 53.625L103.188 53.75V55.4375H126.344C126.406 54.9375 126.438 54.3333 126.438 53.625C126.438 51.1042 125.948 48.8854 124.969 46.9688C123.99 45.0521 122.562 43.5625 120.688 42.5C118.833 41.4375 116.573 40.9062 113.906 40.9062C111.031 40.9062 108.521 41.5938 106.375 42.9688C104.229 44.3229 102.562 46.1979 101.375 48.5938C100.188 50.9896 99.5938 53.7292 99.5938 56.8125ZM155.031 72.625C156.74 72.625 158.302 72.4062 159.719 71.9688C161.156 71.5312 162.375 70.9167 163.375 70.125C164.375 69.3333 165.094 68.4167 165.531 67.375C165.76 68.5 166.24 69.4375 166.969 70.1875C167.719 70.9375 168.635 71.5104 169.719 71.9062C170.823 72.2812 172 72.4688 173.25 72.4688C174.604 72.4688 175.844 72.3125 176.969 72C178.094 71.6875 178.979 71.3021 179.625 70.8438V69.0938C179.271 69.2188 178.833 69.2812 178.312 69.2812C177.458 69.2812 176.74 69 176.156 68.4375C175.573 67.8542 175.281 66.9062 175.281 65.5938V50.7812C175.281 47.0938 174.031 44.3958 171.531 42.6875C169.052 40.9792 165.615 40.125 161.219 40.125C158.344 40.125 155.844 40.4792 153.719 41.1875C151.615 41.8958 149.979 42.8438 148.812 44.0312C147.667 45.2188 147.094 46.5417 147.094 48C147.094 49.25 147.542 50.2917 148.438 51.125C149.333 51.9375 150.427 52.3438 151.719 52.3438C153.031 52.3438 154.135 51.9167 155.031 51.0625C155.927 50.2083 156.375 49.1562 156.375 47.9062C156.375 46.6979 155.948 45.6771 155.094 44.8438C154.24 43.9896 153.208 43.5625 152 43.5625C150.917 43.5625 149.969 44.0312 149.156 44.9688C148.344 45.8854 147.927 46.9792 147.906 48.25H149.25C149.417 47.2083 149.896 46.2917 150.688 45.5C151.5 44.6875 152.521 44.0625 153.75 43.625C155 43.1667 156.344 42.9375 157.781 42.9375C160.156 42.9375 162.01 43.5312 163.344 44.7188C164.677 45.8854 165.344 47.8854 165.344 50.7188V65.875C164.885 66.7083 164.24 67.3646 163.406 67.8438C162.573 68.3021 161.604 68.5312 160.5 68.5312C159.167 68.5312 158.062 68.0938 157.188 67.2188C156.312 66.3229 155.875 65.0521 155.875 63.4062C155.875 62.2188 156.094 61.1875 156.531 60.3125C156.99 59.4167 157.729 58.6458 158.75 58C159.792 57.3542 161.177 56.8333 162.906 56.4375L167.812 55.3438V53.25L159 55.0938C155.812 55.7188 153.25 56.5 151.312 57.4375C149.396 58.375 148.01 59.4792 147.156 60.75C146.302 62 145.875 63.4167 145.875 65C145.875 67.2917 146.719 69.1354 148.406 70.5312C150.115 71.9271 152.323 72.625 155.031 72.625ZM195.625 40.3125L181.781 42.0312V43.75L183.531 44.25C184.385 44.5417 184.927 44.875 185.156 45.25C185.406 45.6042 185.531 46.2812 185.531 47.2812V66.8438C185.531 67.9271 185.312 68.6875 184.875 69.125C184.438 69.5625 183.406 69.9062 181.781 70.1562V72H199.906V70.1562C198.698 69.9688 197.792 69.75 197.188 69.5C196.583 69.25 196.188 68.8958 196 68.4375C195.812 67.9792 195.719 67.3438 195.719 66.5312L195.688 50.3438C196.396 49.6771 197.479 49.1458 198.938 48.75C200.417 48.3333 201.958 48.125 203.562 48.125C204.458 48.125 205.312 48.1875 206.125 48.3125C206.958 48.4167 207.594 48.5521 208.031 48.7188C208.24 48.3646 208.406 47.8854 208.531 47.2812C208.677 46.6562 208.75 46 208.75 45.3125C208.75 43.9167 208.406 42.7292 207.719 41.75C207.052 40.75 206 40.25 204.562 40.25C202.979 40.25 201.469 40.9479 200.031 42.3438C198.615 43.7396 197.135 45.9688 195.594 49.0312L195.625 40.3125ZM214.812 62.6875C214.812 65.0417 215.229 66.9479 216.062 68.4062C216.917 69.8646 218.062 70.9375 219.5 71.625C220.938 72.2917 222.552 72.625 224.344 72.625C226.365 72.625 228.167 72.2708 229.75 71.5625C231.354 70.8542 232.5 70.0208 233.188 69.0625V67.2188C232.75 67.5729 232.219 67.8646 231.594 68.0938C230.969 68.3021 230.302 68.4062 229.594 68.4062C228.219 68.4062 227.094 67.9583 226.219 67.0625C225.365 66.1667 224.938 64.6354 224.938 62.4688V43.4688L232.781 43.9062V40.75L224.938 41.1875V33.2188H223.562L211.188 42.3125V43.9062H214.812V62.6875ZM249.156 40.3125L235.219 42.0312V43.75L236.969 44.25C237.823 44.5417 238.365 44.875 238.594 45.25C238.844 45.6042 238.969 46.2812 238.969 47.2812V66.7812C238.969 67.9062 238.74 68.6875 238.281 69.125C237.844 69.5625 236.823 69.9062 235.219 70.1562V72H252.906V70.1562C251.302 69.9062 250.271 69.5625 249.812 69.125C249.375 68.6875 249.156 67.9062 249.156 66.7812V40.3125ZM243.438 36.0312C244.896 36.0312 246.135 35.5625 247.156 34.625C248.198 33.6667 248.719 32.4688 248.719 31.0312C248.719 29.5938 248.198 28.4062 247.156 27.4688C246.135 26.5312 244.896 26.0625 243.438 26.0625C241.979 26.0625 240.729 26.5312 239.688 27.4688C238.667 28.4062 238.156 29.5938 238.156 31.0312C238.156 32.4688 238.667 33.6667 239.688 34.625C240.729 35.5625 241.979 36.0312 243.438 36.0312ZM256.719 50.1875C256.719 52.7917 257.573 54.8646 259.281 56.4062C261.01 57.9479 263.323 59.1771 266.219 60.0938L268.906 60.875C270.719 61.4583 272.042 62.1354 272.875 62.9062C273.708 63.6562 274.125 64.6354 274.125 65.8438C274.125 67.0938 273.604 68.125 272.562 68.9375C271.542 69.7292 270.115 70.125 268.281 70.125C266.719 70.125 265.26 69.7604 263.906 69.0312C262.552 68.3021 261.385 67.2812 260.406 65.9688C259.448 64.6354 258.76 63.0729 258.344 61.2812H256.594L256.875 70.0625C257.708 70.5417 258.729 70.9792 259.938 71.375C261.167 71.75 262.51 72.0417 263.969 72.25C265.427 72.4792 266.938 72.5938 268.5 72.5938C271.292 72.5938 273.781 72.1979 275.969 71.4062C278.177 70.5938 279.906 69.4375 281.156 67.9375C282.406 66.4167 283.031 64.5938 283.031 62.4688C283.031 59.8229 282.24 57.6979 280.656 56.0938C279.073 54.4688 276.75 53.1875 273.688 52.25L271.031 51.4375C269.26 50.875 267.917 50.25 267 49.5625C266.104 48.8542 265.656 47.8958 265.656 46.6875C265.656 45.4792 266.146 44.5 267.125 43.75C268.104 42.9792 269.49 42.5938 271.281 42.5938C273.365 42.5938 275.125 43.2708 276.562 44.625C278.021 45.9583 279.042 47.8438 279.625 50.2812H281.375L281.25 42.0625C280.333 41.5625 278.99 41.1146 277.219 40.7188C275.469 40.3229 273.448 40.125 271.156 40.125C268.156 40.125 265.573 40.5312 263.406 41.3438C261.26 42.1354 259.604 43.2917 258.438 44.8125C257.292 46.3125 256.719 48.1042 256.719 50.1875ZM296.656 72.625C298.365 72.625 299.927 72.4062 301.344 71.9688C302.781 71.5312 304 70.9167 305 70.125C306 69.3333 306.719 68.4167 307.156 67.375C307.385 68.5 307.865 69.4375 308.594 70.1875C309.344 70.9375 310.26 71.5104 311.344 71.9062C312.448 72.2812 313.625 72.4688 314.875 72.4688C316.229 72.4688 317.469 72.3125 318.594 72C319.719 71.6875 320.604 71.3021 321.25 70.8438V69.0938C320.896 69.2188 320.458 69.2812 319.938 69.2812C319.083 69.2812 318.365 69 317.781 68.4375C317.198 67.8542 316.906 66.9062 316.906 65.5938V50.7812C316.906 47.0938 315.656 44.3958 313.156 42.6875C310.677 40.9792 307.24 40.125 302.844 40.125C299.969 40.125 297.469 40.4792 295.344 41.1875C293.24 41.8958 291.604 42.8438 290.438 44.0312C289.292 45.2188 288.719 46.5417 288.719 48C288.719 49.25 289.167 50.2917 290.062 51.125C290.958 51.9375 292.052 52.3438 293.344 52.3438C294.656 52.3438 295.76 51.9167 296.656 51.0625C297.552 50.2083 298 49.1562 298 47.9062C298 46.6979 297.573 45.6771 296.719 44.8438C295.865 43.9896 294.833 43.5625 293.625 43.5625C292.542 43.5625 291.594 44.0312 290.781 44.9688C289.969 45.8854 289.552 46.9792 289.531 48.25H290.875C291.042 47.2083 291.521 46.2917 292.312 45.5C293.125 44.6875 294.146 44.0625 295.375 43.625C296.625 43.1667 297.969 42.9375 299.406 42.9375C301.781 42.9375 303.635 43.5312 304.969 44.7188C306.302 45.8854 306.969 47.8854 306.969 50.7188V65.875C306.51 66.7083 305.865 67.3646 305.031 67.8438C304.198 68.3021 303.229 68.5312 302.125 68.5312C300.792 68.5312 299.688 68.0938 298.812 67.2188C297.938 66.3229 297.5 65.0521 297.5 63.4062C297.5 62.2188 297.719 61.1875 298.156 60.3125C298.615 59.4167 299.354 58.6458 300.375 58C301.417 57.3542 302.802 56.8333 304.531 56.4375L309.438 55.3438V53.25L300.625 55.0938C297.438 55.7188 294.875 56.5 292.938 57.4375C291.021 58.375 289.635 59.4792 288.781 60.75C287.927 62 287.5 63.4167 287.5 65C287.5 67.2917 288.344 69.1354 290.031 70.5312C291.74 71.9271 293.948 72.625 296.656 72.625ZM337.25 40.3125L323.406 42.0312V43.75L325.156 44.25C326.01 44.5417 326.552 44.875 326.781 45.25C327.031 45.6042 327.156 46.2812 327.156 47.2812V66.7812C327.156 67.9062 326.927 68.6875 326.469 69.125C326.031 69.5625 325.01 69.9062 323.406 70.1562V72H340.594V70.1562C339.177 69.9062 338.281 69.5833 337.906 69.1875C337.531 68.7917 337.344 68.0625 337.344 67V47.5312C337.802 46.6771 338.51 45.9792 339.469 45.4375C340.448 44.8958 341.594 44.625 342.906 44.625C344.719 44.625 346.125 45.1562 347.125 46.2188C348.125 47.2812 348.625 48.8542 348.625 50.9375V67C348.625 68.0625 348.427 68.7917 348.031 69.1875C347.656 69.5833 346.771 69.9062 345.375 70.1562V72H362.562V70.1562C360.938 69.8854 359.906 69.5417 359.469 69.125C359.052 68.6875 358.844 67.9062 358.844 66.7812V50.1875C358.844 46.8333 357.844 44.3229 355.844 42.6562C353.865 40.9688 351.271 40.125 348.062 40.125C345.396 40.125 343.125 40.6771 341.25 41.7812C339.396 42.8854 338.062 44.3021 337.25 46.0312V40.3125Z"
            fill={theme.palette.text.level1}
          />
          <path
            d="M373 4H397V28"
            stroke={theme.palette.primary.main}
            strokeWidth="8"
          />
          <path
            d="M28 4H4V28"
            stroke={theme.palette.primary.main}
            strokeWidth="8"
          />
          <path
            d="M28 96H4V72"
            stroke={theme.palette.primary.main}
            strokeWidth="8"
          />
          <path
            d="M373 96H397V72"
            stroke={theme.palette.primary.main}
            strokeWidth="8"
          />
        </>
      );
      break;

    case 'isotype':
      viewBox = '0 0 116 116';
      children = (
        <>
          <path d="M80 4H112V36" stroke={isotypePrimaryColor} strokeWidth="8" />
          <path
            d="M80 112H112V80"
            stroke={isotypePrimaryColor}
            strokeWidth="8"
          />
          <path d="M36 112H4V80" stroke={isotypePrimaryColor} strokeWidth="8" />
          <path d="M36 4H4V36" stroke={isotypePrimaryColor} strokeWidth="8" />

          <path
            d="M43.7188 88.0391C46.8906 88.0391 49.7708 87.638 52.3594 86.8359C54.9844 86.0339 57.1536 84.9036 58.8672 83.4453C60.6172 81.9505 61.7474 80.1823 62.2578 78.1406C62.5859 80.3281 63.4792 82.1328 64.9375 83.5547C66.4323 84.9766 68.2552 86.0521 70.4062 86.7812C72.5573 87.474 74.7995 87.8203 77.1328 87.8203C79.7578 87.8203 82.2005 87.5469 84.4609 87C86.7214 86.4167 88.4714 85.6875 89.7109 84.8125V82.6797C89.1641 82.8255 88.5078 82.8984 87.7422 82.8984C86.3568 82.8984 85.1719 82.388 84.1875 81.3672C83.2396 80.3464 82.7656 78.7422 82.7656 76.5547V50.4141C82.7656 43.8516 80.4323 39.0208 75.7656 35.9219C71.1354 32.8229 64.5911 31.2734 56.1328 31.2734C50.5911 31.2734 45.888 31.9297 42.0234 33.2422C38.1589 34.5547 35.224 36.3047 33.2188 38.4922C31.2135 40.6432 30.2109 43.0312 30.2109 45.6562C30.2109 48.1354 31.0859 50.1953 32.8359 51.8359C34.5859 53.4766 36.737 54.2969 39.2891 54.2969C41.7682 54.2969 43.901 53.4583 45.6875 51.7812C47.474 50.0677 48.3672 47.9714 48.3672 45.4922C48.3672 43.0495 47.5104 40.9896 45.7969 39.3125C44.0833 37.599 42.0052 36.7422 39.5625 36.7422C37.375 36.7422 35.4427 37.6354 33.7656 39.4219C32.125 41.2083 31.2865 43.3229 31.25 45.7656H32.9453C33.1276 43.7969 33.9479 42.0286 35.4062 40.4609C36.8646 38.8568 38.7422 37.599 41.0391 36.6875C43.3724 35.776 45.8698 35.3203 48.5312 35.3203C52.9062 35.3203 56.2422 36.3958 58.5391 38.5469C60.8359 40.6979 61.9844 44.3073 61.9844 49.375V76.4453C61.4375 77.9036 60.5807 79.0156 59.4141 79.7812C58.2839 80.5104 56.9167 80.875 55.3125 80.875C53.3438 80.875 51.7214 80.1094 50.4453 78.5781C49.1693 77.0469 48.5312 74.8047 48.5312 71.8516C48.5312 69.6641 48.8776 67.7318 49.5703 66.0547C50.2995 64.3411 51.4479 62.8828 53.0156 61.6797C54.5833 60.4766 56.6615 59.5651 59.25 58.9453L65.1562 57.5781V55.1172L51.7031 57.7422C45.9062 58.8359 41.2396 60.2031 37.7031 61.8438C34.1667 63.4844 31.6146 65.4167 30.0469 67.6406C28.5156 69.8281 27.75 72.3073 27.75 75.0781C27.75 79.0521 29.2083 82.2057 32.125 84.5391C35.0781 86.8724 38.9427 88.0391 43.7188 88.0391Z"
            fill={theme.palette.text.level1}
          />
        </>
      );
      break;

    default:
      break;
  }
  return (
    <svg
      height={height}
      viewBox={viewBox}
      style={style}
      className={className}
      fill="none"
    >
      {children}
    </svg>
  );
}

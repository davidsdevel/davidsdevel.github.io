import {redirect} from 'next/navigation';
import {headers} from 'next/headers';

const message = encodeURI('Hola, encontré su contacto a través de su sitio web');
const phoneNumber = process.env.WHATSAPP_NUMBER;

export const GET = async () => {
    const headerList = headers();
    const mobile = headerList.get('sec-ch-ua-mobile');

    const isMobile = mobile === '?1';

    const url = isMobile
        ? `whatsapp://send?text=${message}&phone=${phoneNumber}`
        : `https://web.whatsapp.com/send?text=${message}&phone=${phoneNumber}`;

    return redirect(url);
};

import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Error() {
    const router = useRouter();

    useEffect(() => {
        router.push('/login');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}

export default Error;

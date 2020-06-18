import { useEffect, useState } from 'react';

interface IResponse {
    status: number,
    data: string,
    errText: string
}

export const useFetch = (url: string, options: {}) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<IResponse | null>(null);

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url, options);
                const data = await res.json();
                setResponse(data);
                
            } catch (error) {
                setError(error)
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchData();

    });

    return { response, error, isLoading };
}
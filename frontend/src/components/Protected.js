import { useEffect, useState } from "react";
import useAxios from "../utils/UseAxios";

const Protected = () => {
    const [response, setResponse] = useState('');
    const api = useAxios();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/test/');
                setResponse(response.data.response);
            } catch {
                setResponse('Something went wrong');
            }
        }

        fetchData();
    }, []);

    return(
        <div>
            <h1>Protected Page</h1>
            <p>{response}</p>
        </div>
    );
}

export default Protected;

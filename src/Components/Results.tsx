import { useEffect, useState } from 'react';
import axios from 'axios';


interface ResultsProps {
    term: string;
}


export const Results = ({ term }: ResultsProps) => {
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    let apiKey = import.meta.env.VITE_YOUTUBE_API_KEY

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                    params: {
                        part: 'snippet',
                        q: term,
                        key: apiKey,
                        maxResults: 10,
                        type: 'video'
                    }
                });
                setResults(response.data.items);
            } catch (error) {
                console.error('Erro ao buscar resultados:', error);
            } finally {
                setLoading(false);
            }
        };

        if (term) {
            fetchResults();
        }
    }, [term]);

    if (loading) return <div>Carregando...</div>;

    return (
        <div className='text-black'>
            {results.map((item) => (
                <div key={item.id.videoId} className="flex flex-col space-y-4 items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{item.snippet.title}</h2>
                    <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
                    <p className='text-white'>https://www.youtube.com/watch?v={item.id.videoId}</p>
                </div>
            ))}
        </div>
    );
};
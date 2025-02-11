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
                        maxResults: 50,
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
        <div className='grid grid-cols-4 gap-4 p-4'>
            {results.map((item) => (
                <div key={item.id.videoId} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <h2 className='text-lg font-bold text-white line-clamp-2'>{item.snippet.title}</h2>
                    <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} className="w-full h-48 object-cover"/>
                    <p className='text-white'>https://www.youtube.com/watch?v={item.id.videoId}</p>
                </div>
            ))}
        </div>
    );
};
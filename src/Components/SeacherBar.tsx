import React from 'react';

interface SearchBarProps {
    term: string;
    setTerm: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({term, setTerm}) => {

    return (
        <div className="w-96">
            <input type="text" className="block mt-4 w-full p-4 bg-gray-700 text-lg text-white-900 border rounded-full" placeholder="Digite os Termos de Pesquisa" required onChange={(e) => setTerm(e.target.value)} value={term} /> 
        </div>
    )
}


import React from 'react';

export const Footer: React.SFC<{}> = () => (
    <footer className="main-footer">
        © Copyright {new Date().getFullYear()}. Todos os direitos reservados
    </footer>
);

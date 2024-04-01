export const Tables = {
        listas:[
            'id INTEGER PRIMARY KEY NOT NULL',
            'nome VARCHAR(40)',
            'data DATE',
            'tipo VARCHAR(40)'
        ],
        itens:[
            'id INTEGER PRIMARY KEY NOT NULL',
            'lista_id INTEGER',
            'nome VARCHAR(50)',
            'preco REAL',
            'quantidade INTEGER',
            'FOREIGN KEY(lista_id) REFERENCES listas(id)'
        ]
}
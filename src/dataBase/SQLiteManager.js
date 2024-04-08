import * as SQLite from 'expo-sqlite';
import { Tables } from './Schemas'

const database_name = "FreshList.db";

let db;

export const initDB = () => {
  db = SQLite.openDatabase(database_name);
  for (const table in Tables) {
    let fields = Tables[table];
    let sql = `CREATE TABLE IF NOT EXISTS ${table} (${fields.join(", ")});`;
    db.transaction(tx => {
      tx.executeSql(sql, [], (_, { rows }) =>
        console.log(`Tabela '${table}' criada com sucesso!!`)
      );
    });
  }
};

export const createLista = async (nome, data, tipo) => {
  db.transaction(tx => {
    tx.executeSql(
      "INSERT INTO Listas (nome, data, tipo) VALUES (?,?,?);",
      [nome, data, tipo]
    );
  }, null, null);
};

export const getLista = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql("SELECT * FROM listas;", [], (_, { rows }) => {
        if (rows.length > 0) {
          resolve(rows._array);
        } else {
          resolve([]);
        }
      },
      (_, error) => {
        console.log("Erro ao buscar as listas: " + error);
        reject(error);
      });
    });
  });
};

export const updateLista = async (id, nome, data, tipo) => {
  db.transaction(tx => {
    tx.executeSql(
      "UPDATE Listas SET nome = ?, data = ?, tipo = ? WHERE id = ?;",
      [nome, data, tipo, id]
    );
  }, null, null);
};

export const deleteListaComItens = async (id) => {
  db.transaction(tx => {
    tx.executeSql("DELETE FROM Itens WHERE lista_id = ?;", [id]);
    tx.executeSql("DELETE FROM Listas WHERE id = ?;", [id]);
  }, null, null);
};

export const obterUltimoId = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql("SELECT last_insert_rowid() as ultimoId;", [], (_, { rows }) => {
        if (rows.length > 0) {
          resolve(rows.item(0).ultimoId);
        } else {
          reject('Nenhum ID encontrado');
        }
      });
    });
  });
};


export const createItem = async (lista_id, nome, preco, quantidade) => {
  db.transaction(tx => {
    tx.executeSql(
      "INSERT INTO Itens (lista_id, nome, preco, quantidade) VALUES (?, ?, ?, ?);",
      [lista_id, nome, preco, quantidade]
    );
  }, null, null);
};

export const getItem = (lista_id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM itens WHERE lista_id = ?;",
        [lista_id],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows._array);
          } else {
            resolve([]);
          }
        },
        (_, error) => {
          console.log("Erro ao buscar os itens: " + error);
          reject(error);
        }
      );
    });
  });
};

export const updateItem = async (id, nome, preco, quantidade) => {
  db.transaction(tx => {
    tx.executeSql(
      "UPDATE Itens SET nome = ?, preco = ?, quantidade = ? WHERE id = ?;",
      [nome, preco, quantidade, id]
    );
  }, null, null);
};

export const deleteItem = async (id) => {
  db.transaction(tx => {
    tx.executeSql("DELETE FROM Itens WHERE id = ?;", [id]);
  }, null, null);
};

/*
Importações:
import SQLite from 'react-native-sqlite-storage';: Importa a biblioteca SQLite.
import { Tables } from './schemas';: Importa os esquemas das tabelas definidos no arquivo schemas.js.
Configuração do SQLite:
SQLite.enablePromise(true);: Habilita o uso de Promises para operações assíncronas com o banco de dados.
Definição das Propriedades do Banco de Dados:
const database_name = "ShoppingListDB.db";: Define o nome do arquivo do banco de dados.
const database_version = "1.0";: Define a versão do banco de dados.
const database_displayname = "SQLite Shopping List Database";: Define o nome de exibição do banco de dados.
const database_size = 200000;: Define o tamanho inicial do banco de dados em bytes.
Variável de Conexão:
let db;: Declara uma variável que armazenará a conexão com o banco de dados.
Inicialização do Banco de Dados:
export const initDB = () => { ... };: Exporta a função initDB que inicializa o banco de dados.
SQLite.openDatabase(...): Abre o banco de dados com as propriedades definidas anteriormente.
.then(DB => { ... });: Em caso de sucesso, a conexão com o banco de dados é armazenada na variável db.
Criação das Tabelas:
for (const table in Tables) { ... }: Um loop que percorre cada tabela definida em Tables.
let fields = Tables[table];: Obtém os campos da tabela atual.
let sql = ...;: Cria a string SQL para criar a tabela se ela não existir.
db.executeSql(sql).then(() => { ... });: Executa a string SQL para criar a tabela.
Tratamento de Erros:
.catch(error => { ... });: Captura e trata erros que podem ocorrer durante a abertura do banco de dados ou a criação das tabelas.
*/


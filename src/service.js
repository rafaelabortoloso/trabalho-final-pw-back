const connection = require('./database')


function obterMaiorId(callback) {
    const query = 'SELECT MAX(ID) as maxId FROM ANIMAIS';
  
    connection.query(query, (error, results, fields) => {
      if (error) {
        console.error('Erro ao obter o maior ID: ' + error.message);
        return;
      }
  
      const maxId = results[0].maxId || 0;
      callback(maxId);
    });
    }
  
  //INCLUI NOVOS ANIMAIS
  function adicionarAnimalAutoIncrement(novoAnimal) {
    obterMaiorId((maxId) => {
      
      novoAnimal.ID = maxId + 1;
  
      const query = 'INSERT INTO ANIMAIS SET ?';

      /*const values = [ID, foto, nome, 
                      descricao, idade, comportamento, 
                      historia, historico_doencas, vacinas, 
                      vacinas_pendentes, alimentacao, outros, 
                      ativo];*/
  
 
    //EXEMPLO
    /*const novoAnimal = {
      FOTO: 'C:/Users/Computador/Documents/animalove-main/img/cachorro-1.jpg',
      NOME: 'Rex',
      DESCRICAO: 'Um cachorro muito amigável',
      IDADE: 3,
      COMPORTAMENTO: 'Brincalhão',
      HISTORIA: 'Foi resgatado das ruas',
      HISTORICO_DOENCAS: 'Nenhum histórico de doenças',
      VACINAS: 'Todas em dia',
      VACINAS_PENDENTES: 'Nenhuma pendente',
      ALIMENTACAO: 'Ração balanceada',
      OUTROS: 'Nenhum detalhe adicional',
      ATIVO: true,
    };*/

      connection.query(query, novoAnimal, (error, results, fields) => {
        if (error) {
          console.error('Erro ao adicionar animal: ' + error.message);
          return;
        }
  
        console.log('Animal adicionado com sucesso. ID: ' + novoAnimal.ID);
      });
    });
  }
  
  //-------------------------------------------------------------------------------------------------------------------------------
  
  //BUSCAR ANIMAL PELO NOME
  function buscarAnimalPorNome(nome, callback) {
    const query = 'SELECT * FROM ANIMAIS WHERE NOME = ?';
  
    connection.query(query, [nome], (error, results, fields) => {
      if (error) {
        console.error('Erro ao buscar animal por nome: ' + error.message);
        return;
      }
  
      callback(results);
    });
  }
  
  //EXEMPLO
  const nomeDoAnimal = 'Rex';
  
  //-------------------------------------------------------------------------------------------------------------------------------
  
  //BUSCA TODOS ANIMAIS
  function buscarTodosOsAnimais(callback) {
    const query = 'SELECT * FROM ANIMAIS';
  
    connection.query(query, (error, results, fields) => {
      if (error) {
        console.error('Erro ao buscar todos os animais: ' + error.message);
        return;
      }
  
      callback(results);
    });
  } 
  
  //-------------------------------------------------------------------------------------------------------------------------------
  
  //BUSCA ANIMAL POR ID
  function buscarAnimalPorId(id, callback) {
    const query = 'SELECT * FROM ANIMAIS WHERE ID = ?';
  
    connection.query(query, [id], (error, results, fields) => {
      if (error) {
        console.error('Erro ao buscar animal por ID: ' + error.message);
        return;
      }
  
      callback(results);
    });
  }
 
  //-------------------------------------------------------------------------------------------------------------------------------
  
  //ATUALIZA STATUS DO ANIMAL EM CASO DE ADOÇÃO
  function atualizarStatusDoAnimal(id, ativo) {
    const query = 'UPDATE ANIMAIS SET ATIVO = ? WHERE ID = ?';
  
    connection.query(query, [ativo, id], (error, results, fields) => {
      if (error) {
        console.error('Erro ao atualizar o status do animal: ' + error.message);
        return;
      }
  
      console.log('Status do animal atualizado com sucesso.');
    });
  }

  //-------------------------------------------------------------------------------------------------------------------------------
  
  //ENVIA MENSAGEM PARA O ABRIGO
  function inserirMensagemContato(mensagem) {
    const { nome, email, mensagemTexto } = mensagem;
  
    const query = `INSERT INTO CONTATO (NOME, EMAIL, 
                                        MENSAGEM) 
                                VALUES (?, ?, 
                                        ?)`;
  
    const values = [nome, email, mensagemTexto];
  
    connection.query(query, values, (error, results) => {
      if (error) {
        console.error('Erro ao inserir mensagem de contato:', error);
      } else {
        console.log('Mensagem de contato inserida com sucesso!');
      }
    });
  };

  function deleteAnimalById(id) {
    const query = 'DELETE FROM ANIMAIS WHERE ID = ?';
  
    connection.query(query, [id], (error, results, fields) => {
      if (error) {
        console.error('Erro ao deletar: ' + error.message);
        return;
      }
  
      console.log('Deletado com sucesso.');
    });
  }

module.exports = {obterMaiorId,
    adicionarAnimalAutoIncrement,
    buscarAnimalPorNome,
    buscarAnimalPorId,
    buscarTodosOsAnimais,
    atualizarStatusDoAnimal,
    inserirMensagemContato,
    deleteAnimalById}
/**
 * Executa a função, caso o value não seja "falsy"
 * 
 * @param {Object} value - o valor para testar.
 * @param {Function} fn - a função para executar.
 * @returns {Object} - null ou o valor da execução da função.
 */
const ifVal = (value, fn) => value ? fn(value) : null;

/**
 * Procura um valor no localStorge a partir de sua chave.
 * 
 * @param {String} key - chave do valor a ser procurado no localStorage.
 * @returns {Object} - null ou o valor do localStorage.
 */
const getFromStorage = key => {
  return ifVal(key, nonNullKey => {
    const valueGotFromStorage = localStorage.getItem(nonNullKey);
    return valueGotFromStorage ? valueGotFromStorage : null;
  });
};

/**
 * Adiciona um novo objeto "chave-valor" no localStorage.
 * 
 * @param {String} key - chave para ser inserida no localStorage.
 * @param {Object} object - objeto a ser adicionado no localStorage.
 */
const setInStorage = (key, object) => {
  ifVal(key, nonNullKey => {
    localStorage.setItem(nonNullKey, object);
  });
};

/**
 * Remove um objeto "chave-valor" do localStorage.
 * 
 * @param {String} key - chave a ser removida do localStorage.
 * @returns {String} - null ou a chave que foi removida.
 */
const removeFromStorage = (key) => {
  return ifVal(key, nonNullKey => {
    localStorage.removeItem(key);
    return nonNullKey;
  });
}

export {
  ifVal,
  getFromStorage,
  setInStorage,
  removeFromStorage,
};
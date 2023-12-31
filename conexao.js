import mysql from 'mysql'

const conexao = mysql.createconnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'adm123',
    database: 'bdcopa'
})

conexao.connect()
export default conexao
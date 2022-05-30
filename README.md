<h1> IDEAÇÃO</h1>

<h2> 🧮 ESCOPO </h2>

<p>
    Nosso projeto tem como intuito melhorar o mapeamento dos casos de dengue na região de Blumenau a partir de um site intuitivo com o usuário. Neste site haverá dois formulários, um deles o formulário de Focos. Este possui o objetivo de coletar a informação do usuário a a partir do complemento sobre o foco de dengue encontrado. Será permitido fazer o upload de fotos, caso o usuário queira mostrar o foco encontrado. </p>

<P> O outro formulário será o formulário de Pessoas. Este possui o objetivo de coletar a informação do usuário a a partir do complemento do formulário sobre uma pessoa que está com suspeita de dengue ou está com caso confirmado. </P>

<P>Nosso objetivo com esses formulários é poder apresentar para a população a situação da cidade que ela mora, nesse caso Blumenau em relação a dengue. Por exemplo se alguém quiser alugar um apartamento ao entrar no site ela poderá identificar, a partir de um gráfico qual bairro está com maiores casos, podendo escolher um que ela se sinta segura de morar a partir disso.</P>

<P>As equipes de Prevenção e Combate à Dengue também podem a partir desse site verificar quais locais devem dar mais atenção na retirada de dengue. As fotos ajudarão no auxilio, visto que mais de 60% das denuncias são consideradas improcedentes. Podendo assim verificar como está a situação do local e podendo estabelecer prioridades. A conscientização da população a partir da página de conscientização ajudará na diminuição de denúncias incoerentes.</P>



<h2> 📚Requisitos Funcionais: </h2>

<p>
    RF1: O sistema deverá permitir o cadastramento de novas pessoas confirmadas ou com suspeita de dengue diretamente pela interface.</p>

<P>RF2: O sistema deverá permitir o cadastramento de novos focos de dengue diretamente pela interface.</P>

<p>RF3: O sistema deverá permitir o upload de fotos diretamente pela busca do arquivo pedida na interface.</p>

<p>RF4: O sistema deverá apresentar gráficos para apresentar os dados </p>

<P> RF5: O sistema permitirá que o usuário veja os gráficos que apresentam os resultados perante os formulários
</p>

----



<h2> 📚Requisitos Não Funcionais:</h2>

<p>
    RNF1: Não devem haver falhas de cálculo em relação a apresentação das faixas etárias com dengue.</p>

<p>RNF2: Não deve haver mais números no gráfico de quantidade de focos por bairro em Blumenau do que o cadastrado.</p>

<p>RNF3: Não deve haver mais números no gráfico de quantidade de pessoas por bairro em Blumenau do que o cadastrado.</p>

<p>RNF4: As pessoas podem cadastrar no formulário de pessoas seu nome, data de nascimento, sexo, seu status perante a dengue (confirmada ou suspeita), e seu cpf. Mas não poderão editar ou excluir seu formulário, pós o envio.</p>

<P>As equipes de Prevenção e Combate à Dengue também podem a partir desse site verificar quais locais devem dar mais atenção na retirada de dengue. As fotos ajudarão no auxilio, visto que mais de 60% das denuncias são consideradas improcedentes. Podendo assim verificar como está a situação do local e podendo estabelecer prioridades. A conscientização da população a partir da página de conscientização ajudará na diminuição de denúncias incoerentes.</P>

<h2> PARA FUNCIONAMENTO </h2>

<P>O salvamento das fotos ocorre numa pasta chamada UploadDir. Para que o salvamento funcione é necessário adicionar uma URL de uma pasta que você criará no seu computador, chamada UploadDir, no seu "appliation.properties"</p>

<P>Segue cópia do appliation.properties:</p>

<p>spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5InnoDBDialect</p>
<p>spring.jpa.hibernate.ddl-auto = update</p>

<p>spring.jpa.show-sql=true</p>
<p>spring.jpa.properties.hibernate.format_sql=true</p>

<p>#spring.sql.init.mode=never</p>
<p>spring.datasource.url = jdbc:mysql://localhost:3306/fimdapicada?serverTimezone=UTC</p>
<p>spring.datasource.username = root</p>
<p>spring.datasource.password = admin</p>

<p>spring.servlet.multipart.enabled=true</p>
<p>spring.servlet.multipart.file-size-threshold=2KB</p>
<p>spring.servlet.multipart.max-file-size=200MB</p>
<p>spring.servlet.multipart.max-request-size=215MB</p>

file.upload-dir= /Users/Acer/OneDrive/Documentos/ProjetoRemedios/UploadDir    

<h2> 🤝 Créditos </h2>

<p>Bezalel Miranda Ribeiro: https://github.com/bezalelmiranda</p>

<p>Fernando Marcos Rodrigues: https://github.com/fernandoblumenau</p>

<p> Marcus de Paula: https://github.com/marcusdepaula</p>

<P>Maria Eduarda Krutzsch: https://github.com/mariaedk</p>

<p>Matheus Venera: https://github.com/MatheusVenera</p>

<p>Sâmela Hostins: https://github.com/SamelaHostins</p>

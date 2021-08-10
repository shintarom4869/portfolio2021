<template>
    <div>
        <h1 class="content-title"><font-awesome-icon icon="user-circle" class="icon"/> 基本情報</h1>
        <div>
            <div class="about">
              <div class="me">
                <h2><font-awesome-icon icon="pen" class="icon"/> 村上真太朗</h2>
                <p class="text">Shintaro Murakami</p>
              </div>

              <div class="me">
                <h2><font-awesome-icon icon="birthday-cake" class="icon"/> 生年月日</h2>
                <p class="text">1998-12-31</p>
              </div>

              <div class="me">
                <h2><font-awesome-icon icon="map-marker-alt" class="icon"/> 現住所</h2>
                <p class="text">Tokyo, Japan</p>
              </div>

            </div>

            <h2><font-awesome-icon icon="school" class="icon resent"/> 主な学歴</h2>
            <table class="s-table">
                <tbody>
                <tr>
                    <th>2014/3</th>
                    <td>国立御茶ノ水大学附属中学校</td>
                    <td>卒業</td>
                </tr>
                <tr>
                    <th>2014/4</th>
                    <td>私立慶應義塾大学附属高等学校</td>
                    <td>入学</td>
                </tr>
                <tr>
                    <th>2017/3</th>
                    <td>私立慶應義塾大学附属高等学校</td>
                    <td>卒業</td>
                </tr>
                <tr>
                    <th>2017/4</th>
                    <td>慶應義塾大学理工学部電気情報工学科</td>
                    <td>入学</td>
                </tr>
                <tr>
                    <th>2021/3</th>
                    <td>慶應義塾大学理工学部電気情報工学科</td>
                    <td>卒業</td>
                </tr>
                <tr>
                    <th>2021/4</th>
                    <td>慶應義塾大学理工学研究科総合デザイン工学専攻</td>
                    <td>入学</td>
                </tr>
                <tr>
                    <th>2023/3</th>
                    <td>慶應義塾大学理工学研究科総合デザイン工学専攻</td>
                    <td>卒業見込み</td>
                </tr>
                </tbody>
            </table>

            <h2><font-awesome-icon icon="search" class="icon resent"/> 興味・関心</h2>
            <p class="text">
                web・インフラ・データ関連の技術に興味があります。<br>
            </p>


        </div>
    </div>
</template>


<style scoped>
.about{
    display:inline-flex;
    padding-left: 5%;
    padding-right: 5%;
    
}

.s-table{
    margin: 0px auto;
    text-align: left;
}

.resent{
  margin-top: 50px;
}

.me{
    margin:0 50px;
    font-weight: 200;
}

h2,.text{
  font-weight: 300;
}


@media screen and (max-width: 768px){
	.about {
		flex-direction: column;
	}

	.me {
    margin: 0 auto;
	}
}
</style>
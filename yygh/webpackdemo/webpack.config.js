const path=require("path") //Node.js内置模块
module.exports= {
entry: './src/main.js', //配置入口文件
output: {
    path: path.resolve(__dirname, './dist'), //输出路径，__dirname：当前文件所在路径
    filename: 'bundle.js'//输出文件
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']//需安装npm install css-loader --save-dev  or npm install style-loader --save-dev
        }]
    }
}
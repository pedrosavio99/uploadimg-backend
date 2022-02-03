const mongoose = require('mongoose'); //esta para o mongocliente
const aws = require('aws-sdk');

const s3 = new aws.S3();


 const PostSchema = new mongoose.Schema({
     name: String,//nome original da imagem pra mostrar pro user
     size: Number, //tamnah do arquivo
     key: String, //nome gerado com hash pra evitar imagens repetidas
     url: String, //usada pra armazenar a imagem
     createdAt: {
         type: Date,
         default:Date.now
     }
 });
    
    // PostSchema.pre('save', function(){
    //     if(!this.url) {
    //         this.url = `${process.env.APP_URL}/files/${this.key}`;
    //     }
    // });

    PostSchema.pre('remove', function(){
        if(process.env.STORAGE_TYPE === 's3') {
            return s3.deleteObject({
                Bucket: 'uoload-img99',
                Key: this.key,
            }).promise()
        } else {
            
        }
    });
module.exports = mongoose.model("Post",PostSchema);
// module.exports = mongoose.model("Post",PostSchema);
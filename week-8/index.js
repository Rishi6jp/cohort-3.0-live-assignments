

const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course')
const { adminRouter } = require('./routes/admin')


const {adminMiddleware } = require('./middleware/admin')
const {userMiddleware } = require('./middleware/user')
app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/course', courseRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URL).then(() => console.log("MongoDB Connected")).catch((err) => console.error("MongoDb Not Connected"))
    app.listen(3000);

}

main()







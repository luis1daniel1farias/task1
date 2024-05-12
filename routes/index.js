import { Router } from 'express'
import ContactosController from '../controllers/ContactosController.js'
let router = Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('curriculum', { title: 'CV - Luis Farias' })
})


router.get('/confirm', function (req, res, next) {
  res.render('confirmForm', { title: 'Datos Enviados' })
})

router.get('/error', function (req, res, next) {
  res.render('error', { title: 'Datos Invalidos' })
})



router.post('/sendData', async function (req, res, next) {
  const { body } = req
  const ip = req.ip
  const data = {
    body,
    ip,
  }
 const succesMessage =  await ContactosController(data)

 if(!succesMessage.success){

  res.redirect('/error')
  return
}

  res.redirect('/confirm')
})

export default router

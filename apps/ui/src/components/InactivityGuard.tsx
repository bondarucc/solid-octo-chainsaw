import { Button, notification } from "antd"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { logout } from "../api/api"

const INACTIVITY_LIMIT = 15 * 60 * 1000
const WARNING_LIMIT = INACTIVITY_LIMIT - (30 * 1000)

export function InactivityGuard() {
  const navigate = useNavigate()
  const [api, contextHolder] = notification.useNotification()

  useEffect(() => {
    let lastActivity = Date.now()
    let notificationSwitch: boolean = false

    const interval = setInterval(() => {
      if (Date.now() - lastActivity > INACTIVITY_LIMIT) {
        logout().then(() => navigate("/login"))
      }

      if (Date.now() - lastActivity > WARNING_LIMIT && !notificationSwitch) {
        notificationSwitch = true

        // clearInterval(interval)
        const prevLastActivity = lastActivity
        api.warning({
          showProgress: true,
          // title: 'Notification Title',
          pauseOnHover: false,
          duration: 25,
          onClose: async () => {
            if (prevLastActivity === lastActivity) {
              await logout()
              navigate("/login")
            }
          },
          closable: false,
          actions: (
            <>
              <Button>
                Продолжить работу
              </Button>
            </>
          ),

          description: (
            <span>Автоматический выход из личного кабинета ввиду отсутствия активности</span>
          )
        })
      }

    }, 1000)

    function updateLastActivity() {
      lastActivity = Date.now()
      api.destroy()
      notificationSwitch = false
    }

    ["click", "touchstart"].forEach(event => {
      window.addEventListener(event, updateLastActivity)
    })



    return () => {
      ["click", "touchstart"].forEach(event => {
        window.removeEventListener(event, updateLastActivity)
      })
      clearInterval(interval)
    }
  })

  return contextHolder
}
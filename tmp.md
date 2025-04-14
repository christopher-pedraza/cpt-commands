### **Routing Configuration Commands**
| Command | Description | Parameters |
|---------|------------|------------|
| `ip routing` | Enables IP routing on the device | None |
| `ip route <network> <mask> <next-hop>` | Configures a static route | `<network>`: Destination network, `<mask>`: Subnet mask, `<next-hop>`: Next-hop IP or exit interface |
| `router ospf <PROCESS_ID>` | Enables OSPF routing process | `<PROCESS_ID>`: OSPF process number |
| `network <IP> <wildcard> area <AREA>` | Assigns a network to an OSPF area | `<IP>`: Network IP, `<wildcard>`: Wildcard mask, `<AREA>`: Area number |
| `router rip` | Enables RIP routing protocol | None |
| `version 2` | Enables RIP version 2 | None |
| `network <IP>` | Adds a network to the RIP process | `<IP>`: Network address |

---

### **SSH Configuration Commands**
| Command | Description | Parameters |
|---------|------------|------------|
| `hostname <name>` | Sets the hostname (required for SSH) | `<name>`: Device hostname |
| `ip domain-name <domain>` | Defines a domain name | `<domain>`: Domain name |
| `crypto key generate rsa` | Generates SSH encryption keys | None |
| `ip ssh version 2` | Enables SSH version 2 | None |
| `line vty 0 4` | Configures virtual terminal lines | None |
| `transport input ssh` | Restricts access to SSH only | None |
| `login local` | Requires local authentication | None |
| `username <user> secret <password>` | Creates a user account | `<user>`: Username, `<password>`: Password |

---

### **Access Control Lists (ACLs)**
| Command | Description | Parameters |
|---------|------------|------------|
| `access-list <ID> permit/deny <IP> <wildcard>` | Creates an ACL rule | `<ID>`: ACL number, `<IP>`: Source IP, `<wildcard>`: Wildcard mask |
| `ip access-group <ID> in/out` | Applies ACL to an interface | `<ID>`: ACL number, `in|out`: Traffic direction |
| `access-list <ID> permit/deny any` | Allows or denies all traffic | `<ID>`: ACL number |

---

### **NAT (Network Address Translation)**
| Command | Description | Parameters |
|---------|------------|------------|
| `ip nat inside source list <ACL> interface <INTERFACE> overload` | Configures PAT (NAT overload) | `<ACL>`: ACL number, `<INTERFACE>`: Outside interface |
| `interface <INTERFACE>` | Selects an interface | `<INTERFACE>`: Interface name |
| `ip nat inside` | Marks an interface as inside NAT | None |
| `ip nat outside` | Marks an interface as outside NAT | None |

---

### **DHCP Configuration Commands**
| Command | Description | Parameters |
|---------|------------|------------|
| `ip dhcp pool <NAME>` | Creates a DHCP pool | `<NAME>`: Pool name |
| `network <IP> <subnet>` | Defines the network range | `<IP>`: Network address, `<subnet>`: Subnet mask |
| `default-router <IP>` | Assigns the default gateway | `<IP>`: Gateway address |
| `dns-server <IP>` | Assigns a DNS server | `<IP>`: DNS server IP |
| `ip dhcp excluded-address <IP_START> <IP_END>` | Excludes specific addresses from DHCP | `<IP_START> <IP_END>`: Range of excluded IPs |

---

### **STP (Spanning Tree Protocol)**
| Command | Description | Parameters |
|---------|------------|------------|
| `spanning-tree vlan <VLAN_ID> root primary` | Sets the switch as root bridge for a VLAN | `<VLAN_ID>`: VLAN number |
| `spanning-tree mode rapid-pvst` | Enables Rapid PVST+ mode | None |
| `spanning-tree portfast` | Enables PortFast on an interface | None |

---

### **Wireless Configuration (Packet Tracer AP & WLC)**
| Command | Description | Parameters |
|---------|------------|------------|
| `interface Dot11Radio0` | Enters wireless interface | None |
| `ssid <SSID_NAME>` | Sets the SSID | `<SSID_NAME>`: Wireless network name |
| `authentication open` | Enables open authentication | None |
| `encryption mode ciphers aes-ccm` | Enables AES encryption | None |
| `wpa-psk ascii <PASSWORD>` | Configures WPA key | `<PASSWORD>`: Wi-Fi password |

---

Other commands to check:
```
************************************ ROUTER Y SWITCH ************************************
en
conf t

hostname <name>

username redes secret redes
enable secret class


#################################### Telnet
line vty 0 15
login local
exec-timeout 5 0
transport input telnet

>>> telnet <ip>


#################################### SSH
line vty 0 15
login local
exec-timeout 5 0
transport input ssh

exit

ip domain-name ejemplo.com
crypto key generate rsa
768
ip ssh time-out 60
ip ssh authentication-retries 2
ip ssh version 2


>>> ssh -l <user> <ip>


#################################### Borrar configuracion inicial
erase startup-config
delete vlan.dat
reload


#################################### Validar configuraciones
Configuracion general:
show running-config

Configuracion Interfaces:
show ip interface brief

Tabla de rutas:
show ip route

DNS: 
nslookup <dominio>










************************************ SWITCH ************************************

#################################### Levantar VLAN1
(config) int vlan1
(config-if) ip add <ip> <mask>
(config-if) no shut 
(config) ip default-gateway <ip>










************************************ ROUTER ************************************

#################################### Asignar red a interfaz
(config) int f0/0
(config-if) ip add <ip> <mask>
(config-if) no shut


#################################### Simular internet (En router que simula)
(config) int loopback 0
(config-if) ip add 200.20.20.1 255.255.255.252
(config-if) no shut


#################################### Simular internet (En otros routers)
(config) ip route 0.0.0.0 0.0.0.0 <next_hop_hacia_internet>


#################################### Ruteo
(config) ip route <ip_network> <mask> <next_hop>


#################################### Configurar DHCP
(config) ip dhcp excluded-address <ip_rango_inicio> <ip_rango_fin>
(config) ip dhcp pool <nombre>
(dhcp-config) network <ip_network> <mask>
(dhcp-config) default-router <ip_default_gateway>
(dhcp-config) dns-server <ip_servidor_dns>
(dhcp-config) domain-name <nombre, ej: planta.mx>


#################################### DHCP de servidor
## Interfaz hacia red que quieres otorgar IPS del servidor de DHCP
(config) int f0/0
(config-if) ip helper-address <ip_servidor_dhcp>


#################################### Crear ACL Estandar
## 1 - 99
## Solo source address
## Poner lo mas cerca del DESTINO
## access-list [id] [permit/deny] [ip_sour] [wildcard]

## Permitir/Bloquear un host especifico
(config) access-list 10 permit host 192.168.10.10
(config) access-list 10 deny host 192.168.10.10

## Permitir/Bloquear una red /24
(config) access-list 10 permit 192.168.10.10 0.0.0.255
(config) access-list 10 deny 192.168.10.10 0.0.0.255

## Permitir (poner al final)/Bloquear (implicito) todo
(config) access-list 10 permit any
(config) access-list 10 deny any


#################################### Crear ACL Extendida
## 100 - 199
## Source + Destination
## Poner lo mas cerca del ORIGEN
## access-list [id] [permit/deny] [ip/tcp/udp] [ip_sour] [wildcard] [ip_dest] [wildcard] [eq/gt/lt/neq] [puerto_protocolo/nombre_protocolo]

## Permitir ssh de 192.168.20.20 a red 192.168.40/24
(config) access-list 110 permit tcp 192.168.40.0 0.0.0.255 host 192.168.20.20 eq 22

## Permitir de cualquiera a cualquiera (poner al final)
(config) access-list 110 permit ip any any


#################################### Asignar ACL
## En interfaz fisica
## ip access-group [id] [in/out]
(config-if) ip access-group 110 in
(config-if) ip access-group 110 out

## En interfaz virtual
## access-class [id] in
(config-line) access-class 10 in

************************************ Comprobar conectividad ************************************

#################################### ping infinito
ping -t [ip]


#################################### ping extendido
ping
target ip address [ip]
Extended commands [y]
Source Address or interface [ip o name interfaz]




###################Router y Switch:
Basico:
-- (config) hostname name
-- (config) enable secret pass
-- (config) ip domain-name ejemplo.com
-- (config) username name privilege 15 secret pass


Levantar telnet:
-- tener configurado username con su secret
-- (config) line vty 0 15
-- (config-line) login local
-- (config-line) transport input telnet
> telnet ip


Levantar ssh:
-- domain name establecido
-- (config) crypto key generate rsa  luego seleccionar yes y 2048
-- (config) ip ssh versión 2
-- (config) line vty 0 4
-- (config-line) login local
-- (config-line) transport input ssh
>ssh -l [username] [ip]

##################Switch
Levantar vlan1:
-- (config) int vlan1
-- (config-if) ip address 192.168.0.2 255.255.255.0
-- (config-if) no shutdown
-- (config) ip default-gateway 192.168.0.1


##################Router:
Levantar red:
-- (config)int f0/0
-- (config-if)ip add 192.168.0.1 255.255.255.0 (gateway)
-- (config-if)no shutdown

Configurar DHCP:
-- (config) ip dhcp excluded-address 192.168.0.1 192.168.0.10
-- (config) ip dhcp pool LAN1
-- (dhcp-config) network 192.168.0.0 255.255.255.0
-- (dhcp-config) default-router 192.168.0.1
-- (dhcp-config) dns-server 8.8.8.8 (si se ocupara)

Loopback:
-- (config) int loopback 0
-- (config-if) ip add 200.20.20.1 255.255.255.0

Ruteo:
-- ip route [red-destino] [mascara de la red destino] [interfaz salida (red del router conectado a esa interfaz)]
si tenemos subredes podemos simplemente poner la ip general con mascara de la clase
por default: 0.0.0.0 0.0.0.0 [interfaz salida (router vecino o loopback)]



<<<<<<<<<<<<Configuraciones<<<<<<<<<<<<<<
Configuración general: show running-config
Configuración Interfaces: show ip interface brief
Tabla de rutas: show ip route

<<<<<<<<<<<<<Borrar incial<<<<<<<<<<<<<<
#erase startup config
delete vlan.dat
reload


<<<<<<<<<<<<Conectividad<<<<<<<<<<<<<<<<
ping infinito : >ping -t [ip]
ping extendido
#ping
target ip address [ip]
Extended commands [y]
Source Address or interface [ip o name interfaz]


```

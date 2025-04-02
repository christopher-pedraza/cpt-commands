# VLAN Configuration Commands

This document covers the necessary commands for configuring VLANs in Cisco Packet Tracer.

Return to the [main page](README.md) for more topics.

## Creating and Managing VLANs

| Command | Description | Parameters |
|---------|------------|------------|
| `vlan <VLAN_ID>` | Creates a VLAN and enters VLAN configuration mode | `<VLAN_ID>`: VLAN number (1-4094) |
| `name <VLAN_NAME>` | Assigns a name to a VLAN | `<VLAN_NAME>`: Descriptive name |
| `exit` | Exits VLAN configuration mode | None |

## Assigning VLANs to Interfaces

| Command | Description | Parameters |
|---------|------------|------------|
| `interface <interface>` | Selects an interface to configure | `<interface>`: e.g., `FastEthernet0/1`, `GigabitEthernet0/2` |
| `switchport mode access` | Sets the interface to access mode (for end devices) | None |
| `switchport access vlan <VLAN_ID>` | Assigns the VLAN to the interface | `<VLAN_ID>`: VLAN number |

## Configuring Voice VLAN with QoS

| Command | Description | Parameters |
|---------|------------|------------|
| `vlan <VLAN_ID>` | Creates a VLAN | `<VLAN_ID>`: VLAN number |
| `name <VLAN_NAME>` | Names the VLAN | `<VLAN_NAME>`: VLAN name |
| `interface <interface>` | Selects an interface | `<interface>`: e.g., `FastEthernet0/18` |
| `switchport mode access` | Sets interface as access mode | None |
| `switchport access vlan <VLAN_ID>` | Assigns VLAN to interface | `<VLAN_ID>`: VLAN number |
| `mls qos trust cos` | Enables QoS trusting CoS values | None |
| `switchport voice vlan <VLAN_ID>` | Assigns a voice VLAN to the interface | `<VLAN_ID>`: Voice VLAN number |

## Removing VLANs

| Command | Description | Parameters |
|---------|------------|------------|
| `no vlan <VLAN_ID>` | Deletes a VLAN | `<VLAN_ID>`: VLAN number |
| `delete flash:vlan.dat` | Deletes VLAN configuration file | None |
| `reload` | Reboots the switch to apply changes | None |

## Configuring Trunk Ports

| Command | Description | Parameters |
|---------|------------|------------|
| `interface <interface>` | Selects an interface to configure | `<interface>`: e.g., `FastEthernet0/1`, `GigabitEthernet0/2` |
| `switchport mode trunk` | Sets the interface to trunk mode | None |
| `switchport trunk allowed vlan <VLAN_LIST>` | Specifies which VLANs are allowed on the trunk | `<VLAN_LIST>`: VLAN numbers (e.g., `10,20`, `all`) |
| `switchport trunk native vlan <VLAN_ID>` | Sets the native VLAN for the trunk | `<VLAN_ID>`: VLAN number |

## Dynamic Trunking Protocol (DTP)

| Command | Description | Parameters |
|---------|------------|------------|
| `switchport nonegotiate` | Disables DTP negotiation | None |
| `switchport mode dynamic auto` | Sets port to auto mode | None |
| `switchport mode {access \| dynamic {auto \| desirable} \| trunk}` | Configures DTP mode | Access, Auto, Desirable, Trunk |
| `show dtp interface <interface>` | Displays DTP status for an interface | `<interface>`: Interface name |

### DTP Mode Comparison Table

|  | Dynamic Auto | Dynamic Desirable | Trunk | Access |
|---|---|---|---|---|
| **Dynamic Auto** | Access | Trunk | Trunk | Access |
| **Dynamic Desirable** | Trunk | Trunk | Trunk | Access |
| **Trunk** | Trunk | Trunk | Trunk | Limited Connectivity |
| **Access** | Access | Access | Limited Connectivity | Access |

## VLAN Verification Commands

| Command | Description | Parameters |
|---------|------------|------------|
| `show vlan brief` | Displays VLANs and their assigned interfaces | None |
| `show interfaces trunk` | Displays trunked interfaces and allowed VLANs | None |
| `show mac address-table` | Displays the MAC address table and VLAN associations | None |
| `show spanning-tree` | Displays Spanning Tree Protocol (STP) details | None |

## Inter-VLAN Routing (Router-on-a-Stick)

| Command | Description | Parameters |
|---------|------------|------------|
| `interface <interface>.<subinterface>` | Creates a subinterface for inter-VLAN routing | `<interface>`: Physical interface, `<subinterface>`: Subinterface number |
| `encapsulation dot1q <VLAN_ID>` | Assigns a VLAN tag to the subinterface | `<VLAN_ID>`: VLAN number |
| `ip address <IP> <subnet>` | Assigns an IP address to the subinterface | `<IP>`: IP address, `<subnet>`: Subnet mask |

## Layer 3 Switching (Inter-VLAN Routing)

| Command | Description | Parameters |
|---------|------------|------------|
| `interface vlan <VLAN_ID>` | Creates a Layer 3 SVI | `<VLAN_ID>`: VLAN number |
| `ip address <IP> <subnet>` | Assigns an IP to the VLAN SVI | `<IP>`: IP address, `<subnet>`: Subnet mask |
| `no shut` | Enables the interface | None |
| `ip routing` | Enables Layer 3 routing | None |

## Configuring Routing on a Layer 3 Switch

| Command | Description | Parameters |
|---------|------------|------------|
| `interface <interface>` | Selects an interface | `<interface>`: e.g., `GigabitEthernet0/0/1` |
| `no switchport` | Converts the port to Layer 3 mode | None |
| `ip address <IP> <subnet>` | Assigns an IP address | `<IP>`: IP address, `<subnet>`: Subnet mask |
| `no shut` | Enables the interface | None |
| `ip routing` | Enables Layer 3 routing | None |
| `router ospf <process_id>` | Starts OSPF routing | `<process_id>`: OSPF process ID |
| `network <IP> <wildcard> area <area_id>` | Configures OSPF networks | `<IP>`: Network IP, `<wildcard>`: Wildcard mask, `<area_id>`: OSPF area |
| `show ip route \| begin Gateway` | Displays routing table starting from Gateway | None |

---

Return to the [main page](README.md) for more topics.

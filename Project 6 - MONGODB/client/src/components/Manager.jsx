import { MdOutlineSearch } from 'react-icons/md'
import { TbEditCircle } from 'react-icons/tb'
import { FaTrash } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { MdCancel } from 'react-icons/md'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

// Sort Contacts
/*
const sortedUsers = Contacts.slice().sort((a, b) => {
  const nameA = a.name.toLowerCase()
  const nameB = b.name.toLowerCase()
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }
  return 0
})
console.log(sortedUsers)
*/

const Manager = () => {
  const [form, setform] = useState({ name: '', email: '', number: '' })
  const [Contacts, setContacts] = useState([])
  const [ShowForm, SetShowForm] = useState({ click: false, Btn: 'Add Contact' })
  const [SearchValue, setSearchValue] = useState('')
  const [filterdata, setfilterdata] = useState()

  const getItem = async () => {
    let r = await fetch('http://localhost:3000/')
    let res = await r.json()
    setContacts(res)
    setfilterdata(res)
  }
  useEffect(() => {
    getItem()
  }, [])

  const AddContact = async (e) => {
    e.preventDefault()

    if (form.name && form.email && form.number) {
      const newContact = { ...form, id: uuidv4() }
      setContacts([...Contacts, newContact])
      setfilterdata([...Contacts, newContact])
      // localStorage.setItem('data', JSON.stringify())
      if (form.id) {
        const response = fetch('http://localhost:3000/', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: form.id }),
        })
        const res = fetch('http://localhost:3000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newContact),
        })
      } else {
        const response = fetch('http://localhost:3000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newContact),
        })
      }
    }
  }

  const DeleteContact = (id) => {
    setfilterdata(filterdata.filter((item) => item.id != id))
    setContacts(filterdata.filter((item) => item.id != id))
    const response = fetch('http://localhost:3000/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    })
  }
  const EditContact = (i, id) => {
    let currentobj = Contacts[i]
    setform({ ...currentobj, id: id })
    setContacts(Contacts.filter((item) => item.id != id))
    setfilterdata(filterdata.filter((item) => item.id != id))
  }

  const ToggleForm = (CurrentForm) => {
    SetShowForm((prevState) => ({
      ...prevState,
      click: !prevState.click,
      Btn: CurrentForm,
    }))
  }
  const clearSearch = async () => {
    setSearchValue('')
    let r = await fetch('http://localhost:3000/')
    let res = await r.json()
    setfilterdata(res)
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  const handleSearch = async (e) => {
    const searchedValued = e.target.value

    // Update the search value state
    setSearchValue(searchedValued)

    if (!searchedValued) {
      // If the search value is empty, get data from local storage
      let r = await fetch('http://localhost:3000/')
      let res = await r.json()
      setContacts(res)
      setfilterdata(res)
    } else {
      // Filter contacts based on the search value
      const filter = Contacts.filter((item) =>
        item.name.toLowerCase().includes(SearchValue.toLowerCase()),
      )
      setfilterdata(filter)
    }
  }
  return (
    <div className="myContainer">
      <div className="search flex items-center justify-center gap-3 pb-2">
        <div className="relative ">
          <span className="absolute left-3 top-2">
            <MdOutlineSearch fontSize={25} color="white" />
          </span>
          {SearchValue && (
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={clearSearch}
            >
              <MdCancel fontSize={20} color="white" />
            </span>
          )}
          <input
            className="h-[40px] w-[280px] rounded-lg border border-inherit bg-[#0000] px-12 text-white outline-none placeholder:text-white"
            placeholder="Search contact"
            type="search"
            value={SearchValue}
            onChange={(e) => {
              handleSearch(e)
            }}
          />
        </div>
        <div
          onClick={() => {
            ToggleForm('Add Contact')
          }}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[50%] bg-[#e4ff19e3]"
        >
          <span className="relative bottom-1 text-[35px] font-bold">+</span>
        </div>
      </div>
      <div className="contact-container relative flex h-[81vh] flex-col  gap-3 overflow-y-scroll py-2">
        {filterdata?.map((items, i) => (
          <div
            key={i}
            className="Contact flex items-center justify-between rounded-lg bg-[#FFEAAE] px-4"
          >
            <div className="contact_Info flex items-center gap-3">
              <div className="logo">
                <CgProfile fontSize={30} color="red" fontWeight={100} />
              </div>
              <div className="details max-w-[184px]">
                <div className="name overflow-hidden text-ellipsis text-base">
                  {items.name}
                </div>
                <div className="number overflow-hidden text-ellipsis text-sm">
                  {items.number}
                </div>
              </div>
            </div>
            <div className="Contact-Actions flex gap-3">
              <span
                className="cursor-pointer"
                onClick={() => {
                  ToggleForm('Edit Contact')
                  EditContact(i, items.id)
                }}
              >
                <TbEditCircle fontSize={25} />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  DeleteContact(items.id)
                }}
              >
                <FaTrash fontSize={25} color="#bd00ff" />
              </span>
            </div>
          </div>
        ))}
        {filterdata?.length === 0 && (
          <div className="relative top-[50%] flex items-center justify-center gap-4">
            <div className="logo">
              <img src="images\Handle-Contact.png" alt="" width={40} />
            </div>
            <div className="text-[30px] text-white">No Contact Found</div>
          </div>
        )}
        {ShowForm.click && (
          <form
            action=""
            className="fixed top-[20%] ml-1 flex w-[328px] flex-col items-end rounded-md bg-[#fdfdfd] p-4"
          >
            <div className="form-control flex w-full flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="h-10  border-2 border-black"
                onChange={(e) => {
                  handleChange(e)
                }}
                value={form.name}
              />
            </div>
            <div className="form-control flex w-full flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="h-10  border-2 border-black"
                onChange={(e) => {
                  handleChange(e)
                }}
                value={form.email}
              />
            </div>
            <div className="form-control flex w-full appearance-none  flex-col gap-2">
              <label htmlFor="number">Number</label>
              <input
                type="number"
                name="number"
                className="h-10  border-2 border-black"
                onInput={(e) => {
                  if (e.target.value.length > 10) {
                    e.target.value = e.target.value.slice(0, 10) // Limit to maximum 10 digits
                  }
                }}
                onChange={(e) => {
                  handleChange(e)
                }}
                value={form.number}
              />
            </div>
            <button
              className="onClick={(e) => { AddContact(e) }} mr-2 mt-4 rounded-md bg-[#FCCA3F]
                px-3
              py-[6px]"
              onClick={(e) => {
                AddContact(e)
                ToggleForm()
              }}
            >
              <input
                type="submit"
                value={ShowForm.Btn}
                className="cursor-pointer"
              />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Manager

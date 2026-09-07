import { emailReg } from "../../../utils/common.js";
import Customer from "./customer.model.js";

export const customers = async (req, res) => {
  try {
    const allCustomers = await Customer.find({});

    return res.send({
      status: true,
      customers: allCustomers,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const addCustomer = async (req, res) => {
  const { fullName, email, contact, address } = req.body;

  if (!fullName || !email || !contact) {
    return res.send({
      status: false,
      message: "Fill all the fields",
    });
  }

  if (!emailReg.test(email)) {
    return res.send({
      status: false,
      message: "Email format is invalid",
    });
  }

  try {
    const exist = await Customer.findOne({ email });
    if (exist) {
      return res.send({
        status: false,
        message: "Customer already exist with this email",
      });
    }

    const customer = {
      fullName,
      email,
      contact,
      address: address || "",
    };

    const response = await Customer.create(customer);
    if (response) {
      return res.send({
        status: true,
        message: "Customer has been added",
      });
    } else {
      return res.send({
        status: false,
        message: "Failed to add customer",
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.send({
      status: false,
      message: "ID not found!",
    });
  }
  try {
    const customer = await Customer.findByIdAndDelete({ _id: id });
    if (!customer) {
      return res.send({
        status: false,
        message: "Customer not found",
      });
    }

    return res.send({
      status: true,
      message: "Customer has been deleted!",
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const editCustomer = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.send({
      status: false,
      message: "ID not found!",
    });
  }
  try {
    const customer = await Customer.findById({ _id: id });
    if (!customer) {
      return res.send({
        status: false,
        message: "Customer not found",
      });
    }

    return res.send({
      status: true,
      customer,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCustomer = async (req, res) => {
  const customer = req.body;
  if (!customer._id) {
    return res.send({
      status: false,
      message: "ID not found!",
    });
  }
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate({ _id: customer._id }, customer, {
      new: true,
    });
    if (!updatedCustomer) {
      return res.send({
        status: false,
        message: "Customer not found",
      });
    }

    return res.send({
      status: true,
      message: "Customer updated successfull",
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const viewCustomer = async (req, res) => {
  const { id } = req.params
  console.log("Customer ID:", id)
}
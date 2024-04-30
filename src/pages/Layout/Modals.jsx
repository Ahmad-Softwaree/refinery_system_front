import { ManagerForm, PetForm, ProfileForm } from "@/components/forms";
import ClinicForm from "@/components/forms/ClinicForm";
import CustomerForm from "@/components/forms/CustomerForm";
import EmployeeForm from "@/components/forms/EmployeeForm";
import ProductForm from "@/components/forms/ProductForm";
import VeterinaryForm from "@/components/forms/VeterinaryForm";
import { Operation, Opacity } from "@/components/shared";
import { AuthContext } from "@/context/AuthContext";
import { UiContext } from "@/context/UiContext";
import { UtilContext } from "@/context/UtilContext";
import { useContext } from "react";

const Modals = () => {
  const {
    state: {
      profile,
      manager,
      employee,
      customer,
      pet,
      product,
      veterinary,
      clinic,
    },
  } = useContext(UiContext);

  const {
    state: { user },
  } = useContext(AuthContext);
  const {
    state: { operation },
  } = useContext(UtilContext);
  const flag = Boolean(
    profile ||
      operation ||
      manager ||
      employee ||
      customer ||
      pet ||
      product ||
      veterinary ||
      clinic
  );
  return (
    <>
      {flag && <Opacity />}
      {operation && <Operation />}
      {profile && ["manager", "high_manager"].includes(user?.role) && (
        <ProfileForm />
      )}
      {manager && ["high_manager"].includes(user?.role) && <ManagerForm />}
      {employee && ["high_manager", "manager"].includes(user?.role) && (
        <EmployeeForm />
      )}
      {veterinary &&
        ["high_manager", "manager", "employee"].includes(user?.role) && (
          <VeterinaryForm />
        )}
      {pet && ["high_manager", "manager", "employee"].includes(user?.role) && (
        <PetForm />
      )}
      {clinic &&
        ["high_manager", "manager", "veterinary"].includes(user?.role) && (
          <ClinicForm />
        )}
      {customer &&
        ["high_manager", "manager", "employee"].includes(user?.role) && (
          <CustomerForm />
        )}{" "}
      {product &&
        ["high_manager", "manager", "employee"].includes(user?.role) && (
          <ProductForm />
        )}{" "}
    </>
  );
};

export default Modals;

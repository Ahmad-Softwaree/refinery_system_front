import {
  ProfileForm,
  DepartmentForm,
  OilForm,
  StorageForm,
  OrderForm,
  DeliveryForm,
  MachineForm,
} from "@/components/forms";
import EmployeeForm from "@/components/forms/EmployeeForm";
import { Operation, Opacity } from "@/components/shared";
import { AuthContext } from "@/context/AuthContext";
import { UiContext } from "@/context/UiContext";
import { UtilContext } from "@/context/UtilContext";
import { useContext } from "react";

const Modals = () => {
  const {
    state: {
      profile,
      employee,
      department,
      machine,
      oil,
      storage,
      order,
      delivery,
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
      employee ||
      department ||
      machine ||
      oil ||
      storage ||
      order ||
      delivery
  );
  return (
    <>
      {flag && <Opacity />}
      {operation && <Operation />}
      {profile && ["manager"].includes(user?.role) && <ProfileForm />}
      {employee && ["manager"].includes(user?.role) && <EmployeeForm />}
      {department && ["manager"].includes(user?.role) && <DepartmentForm />}
      {machine && ["manager"].includes(user?.role) && <MachineForm />}
      {oil && ["manager", "employee"].includes(user?.role) && <OilForm />}
      {storage && ["manager", "employee"].includes(user?.role) && (
        <StorageForm />
      )}
      {order && ["manager", "employee"].includes(user?.role) && <OrderForm />}
      {delivery && ["manager", "employee"].includes(user?.role) && (
        <DeliveryForm />
      )}
    </>
  );
};

export default Modals;
